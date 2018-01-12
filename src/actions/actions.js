export const PRODUCTS_FULFILLED = 'PRODUCTS_FULFILLED'
export const productsFulfilled = (products) => ({ type: PRODUCTS_FULFILLED, payload: { products } })

export const DISCOUNTS_FULFILLED = 'DISCOUNTS_FULFILLED'
export const discountsFulfilled = (discounts) => ({ type: DISCOUNTS_FULFILLED, payload: { discounts } })

export const ADD = 'ADD'
export const add = () => ({ type: ADD })
