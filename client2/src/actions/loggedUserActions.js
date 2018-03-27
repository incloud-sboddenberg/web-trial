export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'


export const addUser = (name) => {
    return {
        type: ADD_USER,
        name
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}
