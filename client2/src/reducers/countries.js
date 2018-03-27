import {
    ADD_COUNTRIES,
    ADD_COUNTRY
} from '../actions/countriesActions'


const initcountries = {
    ids: []
}


export const countries = (state = initcountries, action) => {
    switch (action.type) {
        case ADD_COUNTRIES: {
            let newState = {...state}
            let idsSet = new Set(newState.ids)
            action.countries.forEach(country => {
                newState[country.id] = country
                idsSet.add(country.id)
            })
            newState.ids = [...idsSet]
            return newState        
        }
        case ADD_COUNTRY: {
            let oldIds = state.ids
            oldIds.unshift(action.country.id)
            return {
                ...state,
                [action.country.id]: action.country,
                ids: oldIds
            }
        }
        default:
            return state
    }
}
