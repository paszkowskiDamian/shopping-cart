import glamorous from 'glamorous'
import React from 'react'

import { ListElement, InputLabel } from './ListComponents'
import { Editable } from './Editable'

import { colors } from '../styles/theme'

const EditableInput = Editable(InputLabel)

const Empty = glamorous.div({
    flex: 1
})

const Add = glamorous.button(props => ({
    background: 'none',
    color: props.disabled ? colors.lightGray : 'black',
    cursor: props.disabled ? 'no-drop' : 'pointer'
}))

const initialState = {
    name: '',
    price: '',
}
export class AddNewProduct extends React.Component {
    state = initialState

    updateField = fieldName => value => this.setState({ [fieldName]: value })

    validate = () => this.state.name && this.state.name.length > 0 && this.state.price > 0

    addNewProduct = () => {
        this.props.addNewProduct(this.state.name, this.state.price)
        this.setState(initialState)
    }

    render() {
        return (
            <ListElement>
                <EditableInput
                    value={this.state.name}
                    placeholder={'Product name'}
                    updateAction={this.updateField('name')}
                />
                <EditableInput
                    value={this.state.price}
                    placeholder={'Product price'}
                    type="number"
                    min="0"
                    updateAction={this.updateField('price')}
                />
                <Empty />
                <Add disabled={!this.validate()} onClick={this.addNewProduct} >Add</Add>
            </ListElement>
        )
    }
}