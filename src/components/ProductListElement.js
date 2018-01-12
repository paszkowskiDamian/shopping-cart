import glamorous from 'glamorous'
import React from 'react'
import PropTypes from 'prop-types'

import { Product } from '../models/Product'

const ListElement = glamorous.li({
    display: 'flex',
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
    console.log(props)
    return (
        <ListElement>
            <Label>{props.product.name}</Label>
            <Label>{props.product.price}</Label>
        </ListElement>
    )
}

Product.propTypes = {
    product: PropTypes.shape(Product)
}