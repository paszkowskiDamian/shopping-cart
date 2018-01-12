import { omit as _omit } from 'lodash'

import { ADD_TO_CART, REMOVE_FROM_CART, SET_PRODUCT_AMOUNT } from '../actions/actions'

export function cart(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const addTo = action.payload.id
            return { ...state, [addTo]: state[addTo] ? state[addTo] + 1 : 1 }
        case REMOVE_FROM_CART:
            const removeFrom = action.payload.id
            return state[removeFrom] && state[removeFrom] > 1
                ? { ...state, [removeFrom]: state[removeFrom] - 1 }
                : _omit(state, removeFrom)
        case SET_PRODUCT_AMOUNT:
            return state
        default:
            return state
    }
}