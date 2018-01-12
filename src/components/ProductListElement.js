import glamorous from 'glamorous'
import React from 'react'
import PropTypes from 'prop-types'

import { ProductSelector } from './ProductSelector'
import { Product } from '../models/Product'
import { parsePrice, parseDiscount } from '../helpers/discountParser'

import { colors } from '../styles/theme'
import { shadow } from '../styles/shared'

const ListElement = glamorous.li({
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    width: '100%',
    background: colors.cardColor,
    padding: 20,
    margin: '10px 0',
    listStyle: 'none',
    '&:first-of-type': {
        marginTop: 0,
    }
}, shadow)

const Label = glamorous.div(props => ({
    flex: 1,
    display: 'flex',
    justifyContent: props.position ? props.position : 'center',
    alignItems: 'center',
}))

const Discount = glamorous(Label)({
    fontWeight: 300
})

export function ProductListElement(props) {
    return (
        <ListElement>
            <Label position="flex-start" >{props.product.name}</Label>
            <Discount>{parseDiscount(props.product.discount)}</Discount>
            <Label>{parsePrice(props.product.price)}</Label>
            <ProductSelector
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
                setProductAmount={props.setProductAmount}
                inCartAmount={props.product.inCartAmount} />
        </ListElement>
    )
}

Product.propTypes = {
    product: PropTypes.shape(Product),
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    setProductAmount: PropTypes.func.isRequired,
}