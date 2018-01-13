import glamorous from 'glamorous'
import React from 'react'
import PropTypes from 'prop-types'

import { ProductSelector } from './ProductSelector'
import { Product } from '../models/Product'
import { parsePrice, parseDiscount } from '../helpers/discountParser'
import { ListElement, Label } from './ListComponents'

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