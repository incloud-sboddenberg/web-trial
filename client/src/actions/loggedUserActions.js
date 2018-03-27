export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'


export const addUser = (userObject) => {
    return {
        type: ADD_USER,
        userObject
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}
