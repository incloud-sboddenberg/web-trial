import { Component } from 'react'
import PropTypes from 'prop-types'

import HeaderActionBarTemplate from '../templates/HeaderActionBarTemplate'


import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeUser } from '../actions/loggedUserActions'
import { 
    getCountry as _getCountry,
    fetchCountry as _fetchCountry,
    addCountry as _addCountry
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
    }

    state = {
        isDialogOpen: false,
        cities: []
    }
    
    toggleDialog = () => this.setState((currentState) => ({ isDialogOpen: !currentState.isDialogOpen }))

    handleLogoutOnClik = () => {
        this.props.logout()
        this.props.history.push("/login")
    }

    
    addCountryToUser = (city, id) => () => {
        if (id === null) {
            _addCountry(city).then(data => console.log(data))
        }

        this.toggleDialog()
    }

    handleCityInput = (e) => {
        const city = e.target.value
        if (city.length > 3) {
            _getCountry(city)
                .then(data => {
                    if (data.length === 0) {
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
                this.props.username, this.handleLogoutOnClik,
                this.state.isDialogOpen, this.toggleDialog,
                this.handleCityInput, this.state.cities, this.addCountryToUser
            )
        )
    }
}

function mapStateToProps({ loggedUser }) {
    return {
        username: loggedUser.username,
    }
}


function mapDispatchToProps (dispatch) {
    return {
        logout: () => dispatch(removeUser())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderActionBar))
