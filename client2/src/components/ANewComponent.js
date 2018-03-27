import { Component } from 'react'

// FIXME: You may need to check this path
import ANewComponentTemplate from '../templates/ANewComponentTemplate'


// import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { actionCreator } from '../actions'

class ANewComponent extends Component {


    render() {
        return (
            ANewComponentTemplate()
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


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ANewComponent))
export default connect(mapStateToProps, mapDispatchToProps)(ANewComponent)
