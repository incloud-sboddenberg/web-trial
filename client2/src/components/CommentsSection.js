import { Component } from 'react'
import serializeForm from 'form-serialize'

import CommentsSectionTemplate from '../templates/CommentsSectionTemplate'
import PropTypes from 'prop-types'

import { 
    getCommentsOfPost, 
    addCommentToPost,
    upVoteComment,
    downVoteComment,
    deleteComment,
    updateDetailsOfComment
} from '../utils/api'

import { connect } from 'react-redux'

class CommentsSection extends Component {
    
    constructor(props) {
        super(props)
        this.handleUpVoteCommen = this.handleUpVoteComment.bind(this)
        this.handleDownVoteComment = this.handleDownVoteComment.bind(this)
        this.handleEditComment = this.handleEditComment.bind(this)
        this.handleDeleteComment = this.handleDeleteComment.bind(this)
    }
    


    static propTypes = {
        postId: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        sort: PropTypes.string.isRequired
    }

    state = {
        comments: {
            ids: []
        },
        isEditDialogOpen: false,
        commentToEdit: '',
        idToEdit: null
    }

    
    sortComments = (comments ,ids, sort) => {
        let order = 1
        // IIFEs
        // https://developer.mozilla.org/en-US/docs/Glossary/IIFE
        const sortKey =(() => {
            if (sort === "oldest" || sort === "newest") {
                return "timestamp"
            }
            if (sort === "oldest" || sort === "worst") {
                order *= -1
            }
            return "voteScore"
        })()

        ids.sort((id1, id2) => {
            return (comments[id1][sortKey] > comments[id2][sortKey])? -1 * order: order
        })
    }

    closeEditDialog = () => this.setState({ isEditDialogOpen: false })
    openEditDialog = () => this.setState({ isEditDialogOpen: true })

    updateStateAfterVote = (comment) => {
        this.setState((oldState) => 
            ({ 
                comments: { 
                ...oldState.comments, 
                [comment.id]: comment }
            })
        )
    }

    handleUpVoteComment = (id) => () => {
        upVoteComment(id)
            .then(comment => this.updateStateAfterVote(comment))
    }

    handleDownVoteComment = (id) => () => {
        downVoteComment(id)
            .then(comment => this.updateStateAfterVote(comment))
    }

    fetchCommentsPost = () => {
        getCommentsOfPost(this.props.postId)
            .then (comments => {
                let currentComments = {}
                let commentsIds = new Set()
                comments.forEach(comment => {
                    currentComments[comment.id] = comment
                    commentsIds.add(comment.id)
                })
                currentComments["ids"] = [...commentsIds]
                this.setState({ comments: currentComments })
            })
    }


    handleDeleteComment = (id) => () => {
        deleteComment(id)
            .then(data => {
                let currentIds = this.state.comments.ids
                currentIds.splice(currentIds.indexOf(id), 1)
                let currentComments = this.state.comments
                delete currentComments[id]
                this.setState({ comments: { ...currentComments, ids: currentIds } })
            })
    }

    handleEditComment = (id) => () => {
        this.setState({ commentToEdit: this.state.comments[id].body })
        this.setState({ idToEdit: id })
        this.openEditDialog()
    }

    saveCommentEdit = (newComment) => {
        const { idToEdit } = this.state
        updateDetailsOfComment(idToEdit, newComment)
            .then(comment => {
                let currentComments = this.state.comments
                currentComments[idToEdit] = comment
                this.setState({ comments: { ...currentComments } })

                this.closeEditDialog()
            })
    }

    componentDidMount() {
        this.fetchCommentsPost()
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        const { postId, username } = this.props
        e.target.comment.value = ""
        addCommentToPost(postId, values.comment, username)
            .then(comment => {
                let currentComments = this.state.comments
                currentComments.ids.unshift(comment.id)
                currentComments[comment.id] = comment
                this.setState({ comments: currentComments })
            })
    }

    render() {
        const { comments, isEditDialogOpen, commentToEdit } = this.state
        
        this.sortComments(comments, comments.ids, this.props.sort)

        return (
            CommentsSectionTemplate(
                this.props.username,
                this.handleFormSubmit, comments,
                this.handleUpVoteComment, this.handleDownVoteComment,
                this.handleEditComment, this.handleDeleteComment,
                isEditDialogOpen, this.closeEditDialog, commentToEdit, this.saveCommentEdit
            )
        )
    }
}

function mapStateToProps ({ loggedUser }) {
    return {
        username: loggedUser.name
    }
}

function mapDispatchToProps (dispatch) {
    return {
        // propsName: () => dispatch(actionCreator())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentsSection)
