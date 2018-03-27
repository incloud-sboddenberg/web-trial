import uuidv1 from 'uuid/v1'

const api = "http://localhost:3001"


const headers = {
    'Accept': 'application/json',
    'Authorization': 'THIS-IS-A-TOKEN'
}

/**
 * GET CALLS
 */

export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPosts = () => 
    fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPostById = (id) => 
    fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCommentById = (id) =>
    fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCommentsOfPost = (postId) => 
    fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)


/**
 * POST CALLS
 */

const voteToPost = (id, option) => {
    if (option !== "upVote" && option !== "downVote") 
        return new Promise(resolve => resolve({ 'error': 'There was an error.' }))

    return fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ option })
    })
    .then(res => res.json())
    .then(data => data)
}

export const upVotePost = (id) => voteToPost(id, "upVote")

export const downVotePost = (id) => voteToPost(id, "downVote")

export const addAPost = (title, body, author, category) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            id: uuidv1(),
            timestamp: Date.now(),
            title,
            body,
            author,
            category
        })
    })
    .then(res => res.json())
    .then(data => data)

export const addCommentToPost = (postId, body, author) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            id: uuidv1(),
            timestamp: Date.now(),
            body,
            author,
            parentId: postId
        })
    })
    .then(res => res.json())
    .then(data => data)


const voteToComment = (id, option) => {
    if (option !== "upVote" && option !== "downVote") 
        return new Promise(resolve => resolve({ 'error': 'There was an error.' }))

    return fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ option })
    })
    .then(res => res.json())
    .then(data => data)
}

export const upVoteComment = (id) => voteToComment(id, "upVote")

export const downVoteComment = (id) => voteToComment(id, "downVote")


/**
 * PUT CALLS
 */

export const updateDetailsOfPost = (id, title, body) => 
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            title,
            body
        })
    })
    .then(res => res.json())
    .then(data => data)


export const updateDetailsOfComment = (id, body) => 
    fetch(`${api}/comments/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            timestamp: Date.now(),
            body
        })
    })
    .then(res => res.json())
    .then(data => data)

/**
 * DELETE CALLS
 */

export const deletePost = (id) => 
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers
    })
    .then(res => res.json())
    .then(data => data)


export const deleteComment = (id) => 
    fetch(`${api}/comments/${id}`, {
        method: 'DELETE',
        headers
    })
    .then(res => res.json())
    .then(data => data)
