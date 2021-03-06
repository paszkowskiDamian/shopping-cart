import { createSelector } from 'reselect'
import { reduce as _reduce, find as _find } from 'lodash'

import { productSelector, discountSelector, cartSelector } from './stateSelectors'

const aggregator = (products, discounts, cart) => _reduce(products, (acc, product, id) =>
    [
        ...acc,
        {
            ...product,
            id,
            discount: _find(discounts, ['productId', id]),
            inCartAmount: cart[id] || 0,
        }
    ], [])

export const aggregatedProductsSelector = createSelector([
    productSelector,
    discountSelector,
    cartSelector,
], aggregator)