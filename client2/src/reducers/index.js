import { combineReducers } from 'redux'

import { loggedUser } from './loggedUser'
import { countries } from './countries'

export default combineReducers({
    loggedUser,
    countries
})
