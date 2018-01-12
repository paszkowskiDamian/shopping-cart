import { DISCOUNTS_FULFILLED } from '../actions/actions'

export function discounts(state = {}, action) {
    switch (action.type) {
        case DISCOUNTS_FULFILLED:
            return action.payload.discounts
        default:
            return state
    }
}