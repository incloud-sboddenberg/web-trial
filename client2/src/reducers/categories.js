import {
    ADD_CATEGORIES
} from '../actions/categoriesActions'


const initCategories = {
    ids: []
}

export const categories = (state = initCategories, action) => {
    switch (action.type) {
        case ADD_CATEGORIES:
            let newState = {...state}
            let idsSet = new Set(newState.ids)
            action.categories.forEach(category => {
                newState[category.name] = category
                idsSet.add(category.name)
            })
            newState.ids = [...idsSet]
            return newState        
        default:
            return state
    }
}
