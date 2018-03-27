import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import AutoComplete from 'material-ui/AutoComplete'


const CreatePostTemplate = (handleFormSubmit, categories, isAvailable, 
    isEdit, editTitle, editContent) => (
    <div>
        <form onSubmit={handleFormSubmit} >
            <TextField 
                hintText="Title"
                defaultValue={editTitle}
                fullWidth={true}
                floatingLabelText="Title"
                name="title" />
            <br/>
            <TextField 
                hintText="Content"
                floatingLabelText="Content"
                name="content" 
                defaultValue={editContent}
                fullWidth={true}
                multiLine={true}
                rows={4}/>
            <br/>
    {
        !isEdit && !isAvailable &&

            (<AutoComplete
                hintText="Category"
                floatingLabelText="Category"
                name="category"
                errorText="Unavailable Category"
                dataSource={categories}
                />)
    }


    {
        !isEdit && isAvailable &&
            (
            <AutoComplete
                hintText="Category"
                floatingLabelText="Category"
                fullWidth={true}
                name="category"
                dataSource={categories}
                />)
    }
            <FlatButton className="center-form-button" type="submit" label={(isEdit)? 'Edit Post': 'Create Post' } />
        </form>
    </div>
)


export default CreatePostTemplate
