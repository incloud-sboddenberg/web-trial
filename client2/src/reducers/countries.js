import {
    ADD_COUNTRIES
} from '../actions'

const initcountries = {
    ids: []
}


export const countries = (state = initcountries, action) => {
    switch (action.type) {
        case ADD_COUNTRIES: {
           let newState = { ...state } 

        }
        default:
            return state
    }
}
