export const SIGN_UP = 'SIGN_UP'
export const signUp = (email, password) => ({ type: SIGN_UP, payload: { email, password } })

export const SIGN_OUT = 'SIGN_OUT'
export const singOut = () => ({ type: SIGN_OUT })

export const AUTH_STATE_CHANGED = 'AUTH_STATE_CHANGED'
export const authStateChanges = (user) => ({ type: AUTH_STATE_CHANGED, payload: { user } })
