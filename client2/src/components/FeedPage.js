import React, { Component } from 'react'

import {List, ListItem} from 'material-ui/List'
import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'
import { getUsersCountries } from '../actions/countriesActions'
import FontIcon from 'material-ui/FontIcon'
import { blue500  } from 'material-ui/styles/colors'

class FeedPage extends Component {


    constructor(props) {
        super(props)
        this.moveToDetails = this.moveToDetails.bind(this)
    }
    
    componentDidMount() {
        if (this.props.userId === null) {
            this.props.history.push("/")
        } else {
            this.props.fetchUserCountries(this.props.userId)
        }
    }


    moveToDetails = (id) => () => {
       this.props.history.push(`/details/${id}`) 
    }

    render() {
        const { username, countries } = this.props
        if (username === null) return null
        return (
            <div>
                <HeaderActionBar />

            <List className="countries-list" >
                {countries.ids.map((countryId) => (
                    <ListItem 
                        className="inline"
                        key={countryId} 
                        primaryText={countries[countryId].name} 
                    >
                        <FontIcon
                            className="material-icons inline"
                            hoverColor={blue500} 
                            onClick={this.moveToDetails(countryId)}
                        >
                            cloud
                        </FontIcon>
                    </ListItem>
                ))}
            </List>
            </div>
        )
    }
}

function mapStateToProps ({ loggedUser, countries }) {
    return {
        userId: loggedUser.id,
        username: loggedUser.username,
        countries: countries
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchUserCountries: (id) => dispatch(getUsersCountries(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)
