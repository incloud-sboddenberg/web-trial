import React, { Component } from 'react'

import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'


class FeedPage extends Component {

    
    componentDidMount() {
        if (this.props.userId === null) {
            this.props.history.push("/")
        } else {

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

/*
function mapDispatchToProps (dispatch) {
    return {
       setCategoryInStore: () => dispatch(setCategory("all")),
       fetchPosts: () => dispatch(fetchAllPosts()),
       setPostSorting: (sort) => dispatch(setSort(sort)),
    }
}
*/

export default connect(mapStateToProps, null)(FeedPage)
