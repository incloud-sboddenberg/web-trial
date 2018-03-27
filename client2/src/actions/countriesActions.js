export const ADD_COUNTRIES = 'ADD_COUNTRIES'


export function addCountries(countries) {
    return {
        type: ACTION_TYPE,
        countries
    }
}
