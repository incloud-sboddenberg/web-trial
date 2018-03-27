import { Component } from 'react'

import PostCardTemplate from '../templates/PostCardTemplate'

import { connect } from 'react-redux'
import { 
    upVotePost, 
    downVotePost, 
    deletePost,
    editPost
} from '../actions/postsActions'
import PropTypes from 'prop-types'


class PostCard extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        post: PropTypes.object.isRequired
    }
    
    state = {
        isPostedByLoggedUser: false,
        isEditDialogOpen: false
    }


    handleUpVoteOnClick = () => this.props.upVotePost(this.props.postId)
    handleDownVoteOnClick = () => this.props.downVotePost(this.props.postId)

    confirmDelete = () => {
        this.props.deletePost(this.props.post.id)
    }

    confirmEdit = () => {
        this.openEditDialog()
    }

    closeEditDialog = () => this.setState({ isEditDialogOpen: false })
    openEditDialog = () => this.setState({ isEditDialogOpen: true })

    submitPostEdit = (title, body) => {
        this.props.updatePost(this.props.post.id, title, body)
    }


    componentDidMount() {
        const { username, post } = this.props
        if (post.author === username) {
            this.setState({ isPostedByLoggedUser: true })
        }
    }

    render() {
        const { post } = this.props
        return (
            PostCardTemplate(
                post, this.state.isPostedByLoggedUser,
                this.handleUpVoteOnClick.bind(this),this.handleDownVoteOnClick.bind(this),
                this.confirmDelete.bind(this), this.confirmEdit.bind(this),
                this.state.isEditDialogOpen, this.closeEditDialog.bind(this),
                this.submitPostEdit.bind(this), {title: post.title, content: post.body}
            )
        )
    }
}

function mapStateToProps ({ loggedUser, posts }, ownProps) {
    return {
        username: loggedUser.name,
        post: posts[ownProps.postId]
    }
}


function mapDispatchToProps (dispatch) {
    return {
        upVotePost: (id) => dispatch(upVotePost(id)),
        downVotePost: (id) => dispatch(downVotePost(id)),
        deletePost: (postId) => dispatch(deletePost(postId)),
        updatePost: (id, title, body) => dispatch(editPost(id, title, body))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostCard)
