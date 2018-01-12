import { combineReducers } from 'redux'

import { products } from './reducers/productsReducer'
import { discounts } from './reducers/discountReducer'

export const rootReducer = combineReducers({
    products,
    discounts
})
