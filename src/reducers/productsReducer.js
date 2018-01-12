import { PRODUCTS_FULFILLED } from '../actions/actions'

export function products(state = {}, action) {
    switch (action.type) {
        case PRODUCTS_FULFILLED:
            return action.payload.products
        default:
            return state
    }
}