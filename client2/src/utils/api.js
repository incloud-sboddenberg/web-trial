const api = "http://localhost:8080"
const restcountries = "https://restcountries.eu/rest/v2/name"
const weatherAPI = "http://api.openweathermap.org/data/2.5/weather?APPID=860ac8b75699f6c8a4bd406622ea7c31&q"

const headers = {
    'Accept': 'application/json',
}

/**
 * GET CALLS
 */

export const getCountry = (name) =>
    fetch(`${api}/countries?name=${name}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const fetchCountryFromExternaAPI = (name) =>
    fetch(`${restcountries}/${name}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const fetchUserCountries = (id) => 
    fetch(`${api}/users/${id}/countries`, { headers })
    .then(res => res.json())
    .then(data => data)


export const fetchWeatherForCountry = (country) =>
    fetch(`${weatherAPI}=${country}`, { headers })
    .then(res => res.json())
    .then(data => data)



export const addCountryToUser = (id, country) =>
    fetch(`${api}/add-country/${country}/to-user/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)


export const getWeathersOfCountry = (countryId) => 
    fetch(`${api}/countries/${countryId}/weathers`, { headers })
    .then(res => res.json())
    .then(data => data)


export const getWeatherById = (id) => 
    fetch(`${api}/weathers/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)


/**
 * POST CALLS
 */

export const signUp = (username, email, password) => {
    return fetch(`${api}/users`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(res => res.json())
    .then(data => data)
}


export const login = (username, password) => {
    return fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => data)
}


export const addCountry = (name) => {
    return fetch(`${api}/countries`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name })
    })
    .then(res => res.json())
    .then(data => data)
}



export const addWeatherToCountry = (countryId, temp, humidity, rain, icon) => {
    return fetch(`${api}/weathers`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            country: `/countries/${countryId}`,
            temp,
            humidity,
            rain,
            icon
        })
    })
    .then(res => res.json())
    .then(data => data)
}



/**
 * PUT CALLS
 */




/**
 * DELETE CALLS
 */

