export const PRODUCTS_FULFILLED = 'PRODUCTS_FULFILLED'
export const productsFulfilled = (products) => ({ type: PRODUCTS_FULFILLED, payload: { products } })

export const DISCOUNTS_FULFILLED = 'DISCOUNTS_FULFILLED'
export const discountsFulfilled = (discounts) => ({ type: DISCOUNTS_FULFILLED, payload: { discounts } })

export const ADD = 'ADD'
export const add = () => ({ type: ADD })

export const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = id => ({ type: ADD_TO_CART, payload: { id } })

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const removeFromCart = id => ({ type: REMOVE_FROM_CART, payload: { id } })

export const SET_PRODUCT_AMOUNT = 'SET_PRODUCT_AMOUNT'
export const setProductAmount = (id, amount) => ({ type: SET_PRODUCT_AMOUNT, payload: { id, amount } })

export const UPDATE_RECEIPT = 'UPDATE_RECEIPT'
export const updateReceipt = (totalPrice, afterDiscount, saved) => ({ type: UPDATE_RECEIPT, payload: { totalPrice, afterDiscount, saved } })

export const SIGN_UP = 'SIGN_UP'
export const signUp = (email, password) => ({ type: SIGN_UP, payload: { email, password } })

export const SIGN_OUT = 'SIGN_OUT'
export const singOut = () => ({ type: SIGN_OUT })

export const AUTH_STATE_CHANGED = 'AUTH_STATE_CHANGED'
export const authStateChanges = (user) => ({ type: AUTH_STATE_CHANGED, payload: { user } })

