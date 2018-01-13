import { AUTH_STATE_CHANGED } from '../actions/actions'

const initialState = {
    isLoggedIn: false,
    user: {}
}

export function auth(state = initialState, action) {
    switch (action.type) {
        case AUTH_STATE_CHANGED:
            return { ...state, isLoggedIn: !!action.payload.user }
        default:
            return state
    }
}