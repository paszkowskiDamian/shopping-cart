import { combineReducers } from 'redux'

import { ADD } from './actions/actions'

function products(state = 0, action) {
    switch (action.type) {
        case ADD:
            return state + 1
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    products
})
