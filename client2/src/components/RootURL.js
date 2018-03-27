import { Component } from 'react'


import { connect } from 'react-redux'

class RootURL extends Component {

    componentDidMount() {
        if (this.props.userId === null) {
            this.props.history.push("/login")
        } else {
            this.props.history.push("/home")
        }
    }

    render = () => null
}

function mapStateToProps ({ loggedUser}) {
    return {
        userId: loggedUser.id
    }
}



export default connect(mapStateToProps)(RootURL)
