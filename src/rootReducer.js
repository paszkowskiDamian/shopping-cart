import { combineReducers } from 'redux'

import { products } from './reducers/productsReducer'

export const rootReducer = combineReducers({
    products
})
