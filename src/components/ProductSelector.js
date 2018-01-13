import glamorous from 'glamorous'
import React from 'react'
import PropTypes from 'prop-types'

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

const Input = glamorous.input({
    width: 50,
    border: 'none',
    justifyContent: 'center',
})

export class ProductSelector extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            value: props.inCartAmount,
        }
    }

    setEditState = () => this.setState(state => ({ isEditing: !state.isEditing }))

    handleAmountUpdate = (event) => this.setState({ value: event.target.value })


    handleFocus = () => this.setState({ isEditing: true, value: this.props.inCartAmount })

    handleBlur = () => {
        this.setState({ isEditing: false })
        this.props.setProductAmount(this.state.value)
    }

    render() {
        return (
            <Wrapper>
                <Button onClick={this.props.addToCart} >+</Button>
                <Input
                    type="number"
                    min="0"
                    value={this.state.isEditing ? this.state.value : this.props.inCartAmount}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleAmountUpdate} />
                <Button onClick={this.props.removeFromCart}>-</Button>
            </Wrapper>
        )
    }
}

ProductSelector.propTypes = {
    inCartAmount: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    setProductAmount: PropTypes.func.isRequired,
}