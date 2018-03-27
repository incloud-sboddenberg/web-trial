import { getCategories } from '../utils/api'

export const ADD_CATEGORIES = 'ADD_CATEGORIES'


const persistCategoriesInStore = (categories) => ({ type: ADD_CATEGORIES, categories })


export const addCategories = () => (dispatch) => {
    getCategories().then(data => dispatch(persistCategoriesInStore(data)))
}
