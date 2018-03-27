import {
    upVotePost as _upVotePost,
    downVotePost as _downVotePost,
    addAPost as _addAPost,
    deletePost as _deletePost,
    getPosts as _getPots,
    getPostsByCategory as _getPostsByCategory,
    updateDetailsOfPost as _updateDetailsOfPost
} from '../utils/api'




export const ADD_POSTS = 'ADD_POSTS'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const SET_SORT = 'SET_SORT'
export const DELETE_POST = 'DELETE_POST'
export const SET_CATEGORY = 'SET_CATEGORY'
export const EDIT_POST = 'EDIT_POST'


// posts is an array
const addPostsInStore = (posts) => ({ type: ADD_POSTS, posts })

export const fetchAllPosts = () => (dispatch) => {
    _getPots()
        .then(posts => dispatch(addPostsInStore(posts)))
}

export const fetchPostsByCategory = (category) => (dispatch) => {
    _getPostsByCategory(category)
        .then(posts => dispatch(addPostsInStore(posts)))
}


const addNewPost = (post) => ({ type: ADD_NEW_POST, post })

export const createPost = (title, body, author, category) => (dispatch) => {
    _addAPost(title, body, author, category)
        .then(post => dispatch(addNewPost(post)))
}



export const upVotePost = (id) => (dispatch) => {
    _upVotePost(id)
        .then(data => dispatch(upVotePostInStore(id)))
}

export const downVotePost = (id) => (dispatch) => {
    _downVotePost(id)
        .then(data => dispatch(downVotePostInStore(id)))
}

const upVotePostInStore = (id) => ({ type: UPVOTE_POST, id })
const downVotePostInStore = (id) => ({ type: DOWNVOTE_POST, id })


export const setSort = (sort) => ({ type: SET_SORT, sort })


export const deletePost = (id) => (dispatch) => {  
   _deletePost(id)
    .then(data => dispatch(deletePostInStore(id)))
}

const deletePostInStore = (postId) => ({ type: DELETE_POST, postId })


export const setCategory = (category) => ({ type: SET_CATEGORY, category })




const editPostInStore = (post) => ({ type: EDIT_POST, post })

export const editPost = (id, title, body) => (dispatch) => {
    _updateDetailsOfPost(id, title, body)
        .then(post => dispatch(editPostInStore(post)))
}


