import glamorous from 'glamorous'
import React from 'react'
import PropTypes from 'prop-types'

import { ProductSelector } from './ProductSelector'

import { Product } from '../models/Product'

const ListElement = glamorous.li({
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    width: '100%',
    background: 'gray',
    padding: 10,
    margin: '10px 0',
    listStyle: 'none',
})

const Label = glamorous.div({

})

export function ProductListElement(props) {
    return (
        <ListElement>
            <Label>{props.product.name}</Label>
            <Label>{props.product.price}</Label>
            <Label>You have {props.product.inCartAmount}</Label>
            <ProductSelector
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
                setProductAmount={props.setProductAmount} />
        </ListElement>
    )
}

Product.propTypes = {
    product: PropTypes.shape(Product),
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    setProductAmount: PropTypes.func.isRequired,
}