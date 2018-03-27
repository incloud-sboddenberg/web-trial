import { combineReducers } from 'redux'

import { loggedUser } from './loggedUser'
import { categories } from './categories'

export default combineReducers({
    loggedUser,
    categories
})
