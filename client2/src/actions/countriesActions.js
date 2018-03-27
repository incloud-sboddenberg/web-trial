import {
    fetchUserCountries as _fetchUserCountries
} from '../utils/api'


export const ADD_COUNTRIES = 'ADD_COUNTRIES'
export const ADD_COUNTRY = 'ADD_COUNTRY'




export const getUsersCountries = (id) => (dispatch) => {
    _fetchUserCountries(id)
        .then(data => {
           dispatch(addCountries(data.map(country => ({id: country.id, name: country.name }))))
        })
}


const addCountries = (countries) => {
    return {
        type: ADD_COUNTRIES,
        countries
    }
}


export const addCountry = (country) => {
    return {
        type: ADD_COUNTRY,
        country
    }
}
