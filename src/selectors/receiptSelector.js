import { createSelector } from 'reselect'
import { flow as _flow } from 'lodash'

import { aggregateCartSelector } from './aggregateCartSelector'

const calculateOneProductPrice = product => {
    console.log(product)
}

const calculateCartPrice = products => {

}

export const receiptSelector = createSelector(aggregateCartSelector, cart => {
    cart.map(calculateOneProductPrice)
    return cart
})