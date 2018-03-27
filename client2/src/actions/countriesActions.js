import {
    fetchUserCountries as _fetchUserCountries,
    getWeatherById as _getWeatherById
} from '../utils/api'


export const ADD_COUNTRIES = 'ADD_COUNTRIES'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const CLEAR_STORE = 'CLEAR_STORE'




export const getUsersCountries = (id) => (dispatch) => {
    _fetchUserCountries(id)
        .then(data => {
            console.log(data) 
            dispatch(addCountries(data.map(country => {
                let hasWeather = false
                if (country.weather.length > 0) {
                    hasWeather = true
                    // fetch weather
                    // get first weather in array
                    let firstWeather = country.weather[0].split("/")

                    _getWeatherById(firstWeather[firstWeather.length -1])
                        .then(data => {

                        })
                }

                return {id: country.id, name: country.name, hasWeather }
            } )))
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


export const clearStore = () => {
    return {
        type: CLEAR_STORE
    }
}
