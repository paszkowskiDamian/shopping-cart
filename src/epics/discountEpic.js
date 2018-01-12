import { combineEpics } from 'redux-observable'

import { discountsFulfilled } from '../actions/actions'

export function discountEpic(discountRepository) {
    const discount$ = () => discountRepository.getStream().map(discountsFulfilled)

    return combineEpics(discount$)
}