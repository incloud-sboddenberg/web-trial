import { Component } from 'react'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUser } from '../actions/loggedUserActions'

import LoginBoxTemplate from '../templates/LoginBoxTemplate'


class LoginBox extends Component {
    componentWillMount() {
        if (this.props.userName !== null) {
            this.props.history.push("/")
        }
    }

    state = {
        username: null
    }

    handleLoginSubmit() {
        this.props.addUser(this.state.username)
        this.props.history.push("/")
    }


    handleUsernameInputChange = (e) => {
        this.setState({username: e.target.value})
    }

    render() {
        return (
            LoginBoxTemplate(
                this.handleLoginSubmit.bind(this),
                this.handleUsernameInputChange)
        )
    }
}

function mapStateToProps ({ loggedUser }) {
    return {
        userName: loggedUser.name
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addUser: (username) => dispatch(addUser(username))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginBox)
