const api = "http://localhost:8080"
const restcountries = "https://restcountries.eu/rest/v2/name"

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

export const fetchCountry = (name) =>
    fetch(`${restcountries}/${name}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const fetchUserCountries = (id) => 
    fetch(`${api}/users/${id}/countries`, { headers })
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



/**
 * PUT CALLS
 */




/**
 * DELETE CALLS
 */

