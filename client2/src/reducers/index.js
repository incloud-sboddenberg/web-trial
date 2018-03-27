import { combineReducers } from 'redux'

import { loggedUser } from './loggedUser'
import { posts } from './posts'
import { categories } from './categories'

export default combineReducers({
    loggedUser,
    posts,
    categories
})
