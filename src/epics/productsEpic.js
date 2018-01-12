import { combineEpics } from 'redux-observable'

import { ADD, productsFulfilled } from '../actions/actions'

export function productsEpic(productRepository) {
    const products$ = () => productRepository.getStream()
        .map(productsFulfilled)

    return combineEpics(products$)
}