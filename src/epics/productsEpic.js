import { combineEpics } from 'redux-observable'
import { reduce as _reduce } from 'lodash'

import { ADD, productsFulfilled } from '../actions/actions'

export function productsEpic(productRepository) {
    const products$ = () => productRepository.getStream()
        .map(products => _reduce(products, (acc, value, id) => ({ ...acc, [id]: { ...value, id } })))
        .map(productsFulfilled)

    return combineEpics(products$)
}