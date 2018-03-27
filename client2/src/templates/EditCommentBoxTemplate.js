import React from 'react'

import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'


const EditCommentBoxTemplate = (handleFormSubmit, comment, isCommentDialogOpen, closeCommentDialog) => (
    <div>

        <Dialog
            className="long-dialog"
            title="Edit Comment"
            open={isCommentDialogOpen} 
            onRequestClose={closeCommentDialog} > 
        <form onSubmit={handleFormSubmit} >

            <TextField 
                hintText="Comment"
                defaultValue={comment}
                fullWidth={true}
                floatingLabelText="Comment"
                name="comment" />
            <br/>
            <FlatButton className="center-form-button" type="submit" label={"Save"} />
        </form>
    </Dialog>
    </div>
)


export default EditCommentBoxTemplate
