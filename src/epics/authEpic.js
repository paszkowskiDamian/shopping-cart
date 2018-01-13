import { combineEpics } from 'redux-observable'

import { SIGN_UP } from '../actions/actions'

export function authEpic(authService) {
    const signUpEpic = action$ => action$
        .ofType(SIGN_UP)
        .do(action => authService.signUp(action.payload.email, action.payload.password))
        .ignoreElements()

    const authStreamEpic = _ => authService
        .authStream$()
        .map(user => ({ type: 'AUTH', payload: { user } }))

    return combineEpics(signUpEpic, authStreamEpic)
} 