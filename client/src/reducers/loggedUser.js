import {
    ADD_USER,
    REMOVE_USER
} from '../actions/loggedUserActions'


const initLoggedUser = {
    username: null,
    email: null,
    id: null
}

export const loggedUser = (state = initLoggedUser, action) => {
    switch (action.type) {
        case ADD_USER: {
            return state
        }
        case REMOVE_USER:
            return { username: null }

        default: 
            return state
    }
}
