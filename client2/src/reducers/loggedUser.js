import {
    ADD_USER,
    REMOVE_USER
} from '../actions/loggedUserActions'


const initLoggedUser = {
    id: null,
}

export const loggedUser = (state = initLoggedUser, action) => {
    switch (action.type) {
        case ADD_USER: {
            const { username, email, id } = action
            return {
                username,
                email,
                id
            }
        }
        case REMOVE_USER:
            return { id: null }
        default: 
            return state
    }
}
