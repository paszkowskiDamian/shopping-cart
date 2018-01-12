import { ADD_TO_CART, REMOVE_FROM_CART, SET_PRODUCT_AMOUNT } from '../actions/actions'

export function cart(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return state
        case REMOVE_FROM_CART:
            return state
        case SET_PRODUCT_AMOUNT:
            return state
        default:
            return state
    }
}