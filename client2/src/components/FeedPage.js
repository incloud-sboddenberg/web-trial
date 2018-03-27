import React, { Component } from 'react'

import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'


import { parse } from 'qs'



class FeedPage extends Component {

    state = {
    }
    
  
    componentDidMount() {
        if (this.props.userId === null) {
            this.props.history.push("/")
        } else {

        }
    }


    
    // @direction: clicking next/prev
    // next: 1
    // prev: -1
    handlePaginationButtons = (direction) => () => {
        const curretPage = this.state.page + direction
        this.setState((oldState) => ({ page: oldState.page + direction }))
        this.props.history.push("?page=" + curretPage)
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
