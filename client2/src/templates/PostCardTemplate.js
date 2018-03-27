import React from 'react'

import { Link } from 'react-router-dom'

import FontIcon from 'material-ui/FontIcon'
import { blue500 } from 'material-ui/styles/colors'
import UpdatePostBox from '../components/UpdatePostBox'
import Dialog from 'material-ui/Dialog'
import CreatePost from '../components/CreatePost'



const PostCardTemplate = (
    post, isPostedByLoggedUser,
    handleUpVote, handleDownVote, 
    confirmDelete, confirmEdit,
    isEditDialogOpen, closeEditDialog, 
    submitPostEdit, editValues) => {
    

    const currentDate = new Date(post.timestamp)
    const postDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`

    const postUrl = `/c/${post.category}/${post.id}`

    return (

      <div className="post-box">
        <div>
            <FontIcon
                className="material-icons"
                hoverColor={blue500} 
                onClick={handleUpVote}
            >
                    thumb_up
            </FontIcon>
            <h3>{post.voteScore}</h3>
            <FontIcon
                className="material-icons"
                hoverColor={blue500} 
                onClick={handleDownVote}
            >
                    thumb_down
            </FontIcon>
        </div>
        <div className="content-section">
        <Link className="post-title" to={postUrl} >
            {post.title}
        </Link>
        <p>
            Posted on {postDate} by {post.author} to {post.category}
        </p>

        <Link to={{
            pathname: postUrl,
            hash: '#comments'
        }} > {post.commentCount} Comments </Link>
        {isPostedByLoggedUser &&
            <UpdatePostBox 
                isComment={false}
                postTitle={post.title} 
                confirmDelete={confirmDelete}
                confirmEdit={confirmEdit}
            />
        }
        </div>

        <Dialog
            className="long-dialog"
            title="Edit Post"
            open={isEditDialogOpen} 
            onRequestClose={closeEditDialog} > 
            <CreatePost 
                editValues={editValues}
                closeModel={closeEditDialog} 
                isEdit={true}
                handleSubmit={submitPostEdit} />
        </Dialog>
      </div>
    )
}



export default PostCardTemplate
