
const initialState = {
    isLoggedIn: false,
    user: {}
}

export function auth(state = initialState, action) {
    switch (action.type) {
        case 'AUTH':
            return { ...state, isLoggedIn: !!action.payload.user }
        default:
            return state
    }
}