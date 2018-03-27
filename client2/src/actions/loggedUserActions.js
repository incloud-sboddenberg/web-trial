export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'


export const addUser = (id, username, email) => {
    return {
        type: ADD_USER,
        username,
        id,
        email
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}
