import { combineReducers } from 'redux'

import { products } from './reducers/productsReducer'
import { discounts } from './reducers/discountReducer'
import { cart } from './reducers/cartReducer'
import { auth } from './reducers/authReducer'

export const rootReducer = combineReducers({
    products,
    discounts,
    cart,
    auth,
})
