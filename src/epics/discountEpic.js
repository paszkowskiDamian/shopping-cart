import { combineEpics } from 'redux-observable'
import { find as _find, reduce as _reduce } from 'lodash'

import { discountsFulfilled } from '../actions/actions'
import { DELETE_PRODUCT, ADD_DISCOUNT } from '../actions/updateDataActions'

export function discountEpic(discountRepository) {
    const discount$ = () => discountRepository.getStream().map(discountsFulfilled)

    const clearDiscountEpic = (action$, { getState }) => action$
        .ofType(DELETE_PRODUCT)
        .map(({ payload }) => _find(_reduce(getState().discounts, (acc, val, id) => ([...acc, { ...val, id }]), []), ['productId', payload.id]))
        .filter(discount => discount)
        .do(({ id }) => discountRepository.delete(id))
        .ignoreElements()

    const addDiscountEpic = action$ => action$
        .ofType(ADD_DISCOUNT)
        .do(({ payload }) => discountRepository.add(payload.productId, payload.buy, payload.pay))
        .ignoreElements()

    return combineEpics(discount$, clearDiscountEpic, addDiscountEpic)
}