import { Component } from 'react'
import PropTypes from 'prop-types'

import HeaderActionBarTemplate from '../templates/HeaderActionBarTemplate'


import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeUser } from '../actions/loggedUserActions'
import {
    addCountry as addCountryToStore,
    clearStore as _clearStore
} from '../actions/countriesActions'

import { 
    getCountry as _getCountry,
    fetchCountryFromExternaAPI as _fetchCountry,
    addCountry as _addCountry,
    addCountryToUser as _addCountryToUser
} from '../utils/api'

class HeaderActionBar extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        username: PropTypes.string.isRequired,
        logout: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)
        this.toggleDialog = this.toggleDialog.bind(this)
        this.handleCityInput = this.handleCityInput.bind(this)
        this.addCountryToUser = this.addCountryToUser.bind(this)
        this.redirectHome = this.redirectHome.bind(this)
        this.persistCountryToServerAndStore = this.persistCountryToServerAndStore.bind(this)
    }

    state = {
        isDialogOpen: false,
        cities: []
    }
    
    toggleDialog = () => this.setState((currentState) => ({ isDialogOpen: !currentState.isDialogOpen }))

    handleLogoutOnClik = () => {
        this.props.logout()
        this.props.clearCountriesStore()
        this.props.history.push("/login")
    }

    redirectHome = () => {
        this.props.history.push("/home")
    }

    
    addCountryToUser = (city, id) => () => {
        if (id === null) {
            // persist new country in server
            _addCountry(city).then(countryData => 
                this.persistCountryToServerAndStore(this.props.userId, city, countryData.id)
            )
        } else {
            this.persistCountryToServerAndStore(this.props.userId, city, id)
        }
        this.toggleDialog()
    }

    persistCountryToServerAndStore = (userId, city, id) => {
            _addCountryToUser(userId, city)
                .then(result => {
                    if (result.success !== undefined) {
                        this.props.addCountryToStore({ 
                            name: city,
                            id
                        })
                    }
                })
    }


    handleCityInput = (e) => {
        const city = e.target.value
        if (city.length > 3) {
            _getCountry(city)
                .then(data => {
                    if (data.length === 0) {
                        // if no country was found in the server
                        // user external API
                        _fetchCountry(city)
                            .then(data => {
                                if (data instanceof Array && data.length > 0) {
                                    this.setState({ cities: data.map(city => ({name: city.name, id: null})) }) 
                                 }
                            }) 
                    } else {
                        this.setState({ cities: data.map(city => ({name: city.name, id: city.id})) }) 
                    }
                })
        }
    }

    render() {
        if (this.props.username === undefined) return null
        return (
            HeaderActionBarTemplate(
                this.props.username, this.handleLogoutOnClik, this.redirectHome,
                this.state.isDialogOpen, this.toggleDialog,
                this.handleCityInput, this.state.cities, this.addCountryToUser
            )
        )
    }
}

function mapStateToProps({ loggedUser }) {
    return {
        username: loggedUser.username,
        userId: loggedUser.id
    }
}


function mapDispatchToProps (dispatch) {
    return {
        logout: () => dispatch(removeUser()),
        addCountryToStore: (country) => dispatch(addCountryToStore(country)),
        clearCountriesStore: () => dispatch(_clearStore())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderActionBar))
