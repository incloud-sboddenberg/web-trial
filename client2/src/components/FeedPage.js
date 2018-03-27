import React, { Component } from 'react'

import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'
import { getUsersCountries } from '../actions/countriesActions'

class FeedPage extends Component {

    
    componentDidMount() {
        if (this.props.userId === null) {
            this.props.history.push("/")
        } else {
            this.props.fetchUserCountries(this.props.userId)
        }
    }

    render() {
        if (this.props.username === null) return null
        return (
            <div>
                <HeaderActionBar />
            </div>
        )
    }
}

function mapStateToProps ({ loggedUser }) {
    return {
        userId: loggedUser.id,
        username: loggedUser.username,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchUserCountries: (id) => dispatch(getUsersCountries(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)
