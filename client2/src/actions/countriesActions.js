import {
    fetchUserCountries as _fetchUserCountries
} from '../utils/api'


export const ADD_COUNTRIES = 'ADD_COUNTRIES'




export const getUsersCountries = (id) => (dispatch) => {
    _fetchUserCountries(id)
        .then(data => {
            console.log(data)
           dispatch(addCountries(data.map(country => ({id: country.id, name: country.name }))))
        })
}


const addCountries = (countries) => {
    return {
        type: ADD_COUNTRIES,
        countries
    }
}
