import { reduce as _reduce } from 'lodash'

export const productSelector = state => state.products
export const discountSelector = state => _reduce(state.discounts, (acc, val, id) => ({ ...acc, [id]: { ...val, id } }), {})
export const cartSelector = state => state.cart
export const authSelector = state => state.auth