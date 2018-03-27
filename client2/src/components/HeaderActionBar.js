import { Component } from 'react'
import PropTypes from 'prop-types'

import HeaderActionBarTemplate from '../templates/HeaderActionBarTemplate'


import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeUser } from '../actions/loggedUserActions'


class HeaderActionBar extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        username: PropTypes.string.isRequired,
        logout: PropTypes.func.isRequired,
    }

    state = {
    }



    handleLogoutOnClik = () => {
        this.props.logout()
        this.props.history.push("/login")
    }
   


    render() {
        const { username } = this.props
        const { isPostDialogOpen} = this.state
        return (
            HeaderActionBarTemplate(
                username, this.handleLogoutOnClik)
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
