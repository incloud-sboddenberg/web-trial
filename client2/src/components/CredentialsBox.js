import { Component } from 'react'
import serializeForm from 'form-serialize'

import CredentialsBoxTemplate from '../templates/CredentialsBoxTemplate'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUser } from '../actions/loggedUserActions'

import { 
    signUp as _signUp,
    login as _login
} from '../utils/api'

class CredentialsBox extends Component {

    constructor(props) {
        super(props)
        this.toggleLogin = this.toggleLogin.bind(this)
    }

    state = {
        isLogin: true
    }
    

    componentDidMount() {
        if (this.props.userId !== null) {
            this.props.history.push("/home")
        }
    }


    toggleLogin = () => this.setState((currentState) => ({isLogin: !currentState.isLogin}))




    handleFormSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        
        if (this.state.isLogin) {
            _login(values.username, values.password).then(data => {
                if (data.error) {
                    // TODO: add a snackbar with information
                } else {
                    this.props.addUserToStore(data.id, data.username, data.email)
                    this.props.history.push("/home")
                }
            })
        } else {
            // TODO: signup routine
            console.log("signup")
            _signUp(values.username, values.email, values.password).then(data => {
                // TODO: Add a confirmation message
                this.toggleLogin()
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

function mapStateToProps ({ loggedUser }) {
    return {
        userId: loggedUser.id
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addUserToStore: (id, username, email) => dispatch(addUser(id, username, email))
    }
}


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CredentialsBox))
export default connect(mapStateToProps, mapDispatchToProps)(CredentialsBox)
