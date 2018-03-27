import React, { Component } from 'react'

import { connect } from 'react-redux'
import HeaderActionBar from './HeaderActionBar'


import { parse } from 'qs'



class FeedPage extends Component {

    state = {
        sort: "best",
        page: 1
    }
    
    /*
    componentDidMount() {
        if (this.props.username === null) {
            this.props.history.push("/")
        } else {
            const queryString = this.props.history.location.search
            if (queryString) {
                const queryObj = parse(queryString, { ignoreQueryPrefix: true })
                if (queryObj.page) {
                    const pageNbr = Number(queryObj.page)
                    if (!isNaN(pageNbr))
                        this.setState({ page: pageNbr })
                }
            }

            let sort = this.props.match.params.sort
            if (sort === undefined) sort = "best"
            if (sort !== "best") {
                this.props.setPostSorting(sort)
                this.setState({ sort })
            }
            this.props.fetchPosts()
            this.props.setCategoryInStore()
        }
    }
*/

    
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
                <HeaderActionBar page={"FeedPage"} />
            </div>
        )
    }
}

function mapStateToProps ({ loggedUser, posts }) {
    return {
        username: loggedUser.name,
        postsIds: posts.ids.filter(id => !posts[id].deleted)
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
