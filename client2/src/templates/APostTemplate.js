import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import HeaderActionBar from '../components/HeaderActionBar'
import UpdatePostBox from '../components/UpdatePostBox'
import CommentsSection from '../components/CommentsSection'
import Dialog from 'material-ui/Dialog'
import CreatePost from '../components/CreatePost'
import SortBox from '../components/SortBox'

const APostTemplate = (isPostedByLoggedUser, post, 
    confirmDelete, confirmEdit,
    isEditDialogOpen, closeEditDialog, 
    submitPostEdit, editValues,
    sort) => (
    <div>
        <HeaderActionBar page={`/c/${post.category}`} />
        <Card className="post-details">
            <CardTitle 
                title={post.title} 
                subtitle={`Posted By ${post.author} on /c/${post.category}`} />
            <CardText>
                <p className="post-content">{post.body}</p>

                { isPostedByLoggedUser &&
                    <UpdatePostBox 
                        postId={post.id} 
                        isComment={false}
                        postTitle={post.title} 
                        confirmDelete={confirmDelete}
                        confirmEdit={confirmEdit} />
                }

            </CardText>
        </Card>


        <SortBox 
            sort={sort} 
            baseUrl={`/c/${post.category}/${post.id}`} 
            isInComments={true} 
        />

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


        <CommentsSection postId={post.id} sort={sort}  />
    </div>
)


export default APostTemplate
