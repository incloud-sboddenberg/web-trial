import { Component } from 'react'


import { connect } from 'react-redux'

class RootURL extends Component {

    componentDidMount() {
        if (this.props.username === null) {
            this.props.history.push("/login")
        } else {
            this.props.history.push("/feed")
        }
    }

    render = () => null
}

function mapStateToProps ({ loggedUser}) {
    return {
        username: loggedUser.name
    }
}



export default connect(mapStateToProps)(RootURL)
