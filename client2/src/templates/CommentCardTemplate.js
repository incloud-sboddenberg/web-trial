import React from 'react'

import FontIcon from 'material-ui/FontIcon'
import { blue500 } from 'material-ui/styles/colors'
import UpdatePostBox from '../components/UpdatePostBox'


const CommentCardTemplate = (comment,
    upVoteComment, downVoteComment,
    editComment, deleteComment,
    isOfLoggedUser) => {
    
    const currentDate = new Date(comment.timestamp)
    const commentDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`
    
    
    return (
        <div className="comment-box">
            <div className="votes-bts">
                <FontIcon
                className="material-icons"
                onClick={upVoteComment}
                hoverColor={blue500} 
                >
                thumb_up
                </FontIcon>
                    <h3>{comment.voteScore}</h3>
                <FontIcon
                className="material-icons"
                hoverColor={blue500} 
                onClick={downVoteComment}
                >
                thumb_down
                </FontIcon>
            </div>
            <div className="content-section">

            <p className="comment-header">
                {`${comment.author} commented on ${commentDate}`}
            </p>
            <p className="comment-body">
                {comment.body}
            </p>
            </div>
        {isOfLoggedUser &&
            <UpdatePostBox 
                isComment={true}
                confirmDelete={deleteComment}
                confirmEdit={editComment} 
            />
        } 
        </div>
    )
}

export default CommentCardTemplate
