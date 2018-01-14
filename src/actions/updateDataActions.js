export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT'
export const addNewProduct = (name, price) => ({ type: ADD_NEW_PRODUCT, payload: { name, price } })

export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const deleteProduct = id => ({ type: DELETE_PRODUCT, payload: { id } })

export const UPDATE_NAME = 'UPDATE_NAME'
export const updateName = (id, name) => ({ type: UPDATE_NAME, payload: { id, name } })

export const UPDATE_PRICE = 'UPDATE_PRICE'
export const updatePrice = (id, price) => ({ type: UPDATE_PRICE, payload: { id, price } })