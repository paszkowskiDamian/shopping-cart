import { combineEpics } from 'redux-observable'

import { SIGN_UP } from '../actions/actions'

export function authEpic(authService) {
    const signUpEpic = action$ => action$
        .ofType(SIGN_UP)
        .do(action => authService.signUp(action.payload.email, action.payload.password))
        .ignoreElements()

    return combineEpics()
} 