import { combineEpics } from 'redux-observable'

import { SIGN_UP, SIGN_OUT, authStateChanges } from '../actions/authActions'

export function authEpic(authService) {
    const signUpEpic = action$ => action$
        .ofType(SIGN_UP)
        .do(action => authService.signUp(action.payload.email, action.payload.password))
        .ignoreElements()

    const authStreamEpic = _ => authService
        .authStream$()
        .map(authStateChanges)

    const logOutEpic = action$ => action$
        .ofType(SIGN_OUT)
        .map(() => authService.signOut())
        .ignoreElements()

    return combineEpics(signUpEpic, authStreamEpic, logOutEpic)
} 