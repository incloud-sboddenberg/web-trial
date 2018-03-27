import { Component } from 'react'
import serializeForm from 'form-serialize'

import CredentialsBoxTemplate from '../templates/CredentialsBoxTemplate'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { actionCreator } from '../actions'

import { signUp as _signUp } from '../utils/api'

class CredentialsBox extends Component {

    constructor(props) {
        super(props)
        this.toggleLogin = this.toggleLogin.bind(this)
    }

    state = {
        isLogin: true
    }
    
    toggleLogin = () => this.setState((currentState) => ({isLogin: !currentState.isLogin}))



    handleFormSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        
        if (this.state.isLogin) {
            // TODO: login routine
            console.log("login")
            console.log(values)
        } else {
            // TODO: signup routine
            console.log("signup")
            _signUp(values.username, values.email, values.password).then(data => {
                console.log(data)
            })
        }

    }

    render() {
        const { isLogin } = this.state
        return (
            CredentialsBoxTemplate(this.handleFormSubmit, isLogin, this.toggleLogin)
        )
    }
}

function mapStateToProps ({ }) {
    return {
    }
}

function mapDispatchToProps (dispatch) {
    return {
        // propsName: () => dispatch(actionCreator())
    }
}


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CredentialsBox))
export default connect(mapStateToProps, mapDispatchToProps)(CredentialsBox)
