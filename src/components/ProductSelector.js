import glamorous from 'glamorous'
import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = glamorous.div({

})

const Button = glamorous.button({

})

const Input = glamorous.input({

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

    handleAmountUpdate = (event) => {
        console.log(event)
        this.setState({ value: event.target.value })
    }

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