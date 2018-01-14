import { combineEpics } from 'redux-observable'

import { productsFulfilled } from '../actions/actions'
import { ADD_NEW_PRODUCT, DELETE_PRODUCT } from '../actions/updateDataActions'

export function productsEpic(productRepository) {
    const products$ = () => productRepository.getStream()
        .map(productsFulfilled)

    const addProductEpic = action$ => action$
        .ofType(ADD_NEW_PRODUCT)
        .do(({ payload }) => productRepository.add(payload.name, payload.price))
        .ignoreElements()

    const deleteProductEpic = action$ => action$
        .ofType(DELETE_PRODUCT)
        .do(({ payload }) => productRepository.delete(payload.id))
        .ignoreElements()

    return combineEpics(products$, addProductEpic, deleteProductEpic)
}