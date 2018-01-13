import { createSelector } from 'reselect'
import { reduce as _reduce, find as _find } from 'lodash'


import { productSelector, discountSelector, cartSelector } from './stateSelectors'

const aggregateCart = (products, discounts, cart) => _reduce(cart, (acc, inCartAmount, id) => (
    [
        ...acc,
        {
            ...products[id],
            inCartAmount,
            id,
            discount: _find(discounts, ['productId', id]),
        }
    ]), [])

export const aggregateCartSelector = createSelector([productSelector, discountSelector, cartSelector], aggregateCart)