import glamorous from 'glamorous'
import React from 'react'

import { Label, InputLabel } from './ListComponents'
import { Editable } from './Editable'

import { colors } from '../styles/theme'

const LabelToggle = glamorous(Label)({
    cursor: 'pointer',
    transition: '0.2s',
    '&:hover': {
        background: colors.lightGray,
    }
})

const DiscountForm = glamorous(Label)({
    display: 'flex',
    alignItems: 'stretch',
})

const FormText = glamorous.span({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const AmountInput = Editable(glamorous(InputLabel)({
    width: 30,
    marginRight: 5,
    marginLeft: 5,
}))


const Button = glamorous.button(props => ({
    background: 'none',
    cursor: props.disabled ? 'no-drop' : 'pointer',
    color: props.disabled ? colors.lightGray : 'black',
    '&:first-of-type': {
        borderRight: 'none',
    }
}))

const initialState = {
    isEditing: false,
    buy: '',
    pay: '',
}

export class AddDiscount extends React.PureComponent {
    state = initialState

    startEditing = () => this.setState({ isEditing: true })

    dismiss = () => this.setState(initialState)

    setField = field => value => this.setState({ [field]: value })

    validate = () => this.state.buy && this.state.pay && this.state.buy > this.state.pay

    submit = () => this.props.addDiscount(this.state.buy, this.state.pay) && this.setState(initialState)

    render() {
        return this.state.isEditing
            ? <DiscountForm>
                <FormText>Buy</FormText>
                <AmountInput type="number" min="0" updateAction={this.setField('buy')} />
                <FormText>pay for</FormText>
                <AmountInput type="number" min="0" updateAction={this.setField('pay')} />
                <Button disabled={!this.validate()} onClick={this.submit} >ok</Button>
                <Button onClick={this.dismiss} >dismiss</Button>
            </DiscountForm>
            : <LabelToggle onClick={this.startEditing}>Add discount</LabelToggle>
    }
}