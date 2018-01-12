import glamorous from 'glamorous'
import React from 'react'
import PropTypes from 'prop-types'

export function ProductSelector(props) {
    return (
        <div>
            <button onClick={props.addToCart} >+</button>
            <input type="number" min="0" />
            <button onClick={props.removeFromCart}>-</button>
        </div>
    )
}

ProductSelector.propTypes = {
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    setProductAmount: PropTypes.func.isRequired,
}