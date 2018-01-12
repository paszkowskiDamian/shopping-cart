import { createSelector } from 'reselect'
import { reduce as _reduce, find as _find } from 'lodash'

import { products } from '../reducers/productsReducer';

const productSelector = state => state.products
const discountSelector = state => state.discounts

const aggregator = (products, discounts) => _reduce(products, (acc, product, id) =>
    [
        ...acc,
        {
            ...product,
            id,
            discount: _find(discounts, ['productId', id])
        }
    ], [])

export const aggregatedProductsSelector = createSelector([
    productSelector,
    discountSelector,
], aggregator)