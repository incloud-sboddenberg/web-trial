import React from 'react'
import { Card } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import CommentCard from '../components/CommentCard'
import EditCommentBox from '../components/EditCommentBox'

const CommentsSectionTemplate = (loggedUser,
    handleFormSubmit, comments,
    upVoteComment, downVoteComment,
    editComment, deleteComment,
    isEditDialogOpen, closeEditDialog, comment, saveEdit
) => (
    <div>
        <Card className="submit-comment-box">
            <form onSubmit={handleFormSubmit} >
                <TextField 
                    hintText="Comment here if you want =D"
                    floatingLabelText="Comment"
                    name="comment" 
                    fullWidth={true}
                    multiLine={true}
                    rows={2}/>
                <br/>
                <FlatButton type="submit" label="Save" />
            </form>
        </Card>


        <div className="comment-count"> 
            {comments.ids.length} commments
        </div>

        {comments.ids.map(id => (
            <CommentCard 
                key={id} 
                comment={comments[id]} 
                upVoteComment={upVoteComment(id)}   
                downVoteComment={downVoteComment(id)}
                editComment={editComment(id)}
                deleteComment={deleteComment(id)}
                isOfLoggedUser={comments[id].author === loggedUser}
            />))}


        <EditCommentBox 
            isDialogOpen={isEditDialogOpen} 
            closeDialog={closeEditDialog}
            comment={comment}
            saveEdit={saveEdit} />
    </div>
)


export default CommentsSectionTemplate
