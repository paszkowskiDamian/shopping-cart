import { createSelector } from 'reselect'
import { flow as _flow } from 'lodash'

import { aggregateCartSelector } from './aggregateCartSelector'

const roundAmount = amount => Number(amount.toFixed(2))

const calculateOneProductPrice = product => {
    const { inCartAmount, price } = product
    if (product.discount) {
        const { buy, pay } = product.discount
        const discountGroups = Math.floor(inCartAmount / buy)
        const reminder = inCartAmount % buy
        return (reminder + discountGroups * pay) * price
    } else {
        return inCartAmount * price
    }
}

const productToPrice = (products) => products.map(calculateOneProductPrice)

const calculateCartPrice = productsPrice => productsPrice.reduce((acc, price) => acc + price, 0)

const calculateStandardPrice = products => products.reduce((total, product) => total + (product.inCartAmount * product.price), 0)

export const receiptSelector = createSelector(aggregateCartSelector, cart => ({
    basketPrice: _flow(productToPrice, calculateCartPrice, roundAmount)(cart),
    withoutDiscount: _flow(calculateStandardPrice, roundAmount)(cart),
}))