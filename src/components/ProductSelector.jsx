import glamorous from 'glamorous'
import React from 'react'
import PropTypes from 'prop-types'

import { Editable } from './Editable'

import { colors } from '../styles/theme'

const Wrapper = glamorous.div({
    display: 'flex',
    height: 30,
    border: `1px solid ${colors.lightGray}`
})

const Button = glamorous.button({
    cursor: 'pointer',
    background: 'none',
    width: 30,
    height: '100%',
    border: 'none',
    '&:focus': {
        outline: 'none',
    }
})

const Input = Editable(glamorous.input({
    width: 50,
    border: 'none',
    justifyContent: 'center',
}))

export function ProductSelector(props) {
    return (
        <Wrapper>
            <Button onClick={props.addToCart} >+</Button>
            <Input
                type="number"
                min="0"
                value={props.inCartAmount}
                updateAction={props.setProductAmount} />
            <Button onClick={props.removeFromCart}>-</Button>
        </Wrapper>
    )
}

ProductSelector.propTypes = {
    inCartAmount: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    setProductAmount: PropTypes.func.isRequired,
}