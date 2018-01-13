import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'

import { Product } from '../models/Product'

const Line = glamorous.li({
    display: 'flex',
    justifyContent: 'space-between',
})

const DataWrapper = glamorous.div(props => ({
    display: 'flex',
    flex: props.flex || 1,
    justifyContent: props.justifyContent || 'flex-end'
}))

export function ReceiptLine(props) {
    const { name, inCartAmount, price } = props.product
    return (
        <Line>
            <DataWrapper flex="2" justifyContent="flex-start">{name}</DataWrapper>
            <DataWrapper>{inCartAmount}</DataWrapper>
            <DataWrapper>{price}</DataWrapper>
            <DataWrapper>{(price * inCartAmount).toFixed(2)}</DataWrapper>
        </Line>
    )
}

ReceiptLine.propTypes = {
    product: PropTypes.shape(...Product)
}