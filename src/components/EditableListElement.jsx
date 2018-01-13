import glamorous from 'glamorous';
import React from 'react'

import { ListElement, Label } from './ListComponents'
import { parseDiscount } from '../helpers/discountParser'

import { colors } from '../styles/theme'

const EditableLabel = glamorous.input({
    background: 'none',
    border: `1px solid ${colors.lightGray}`,
    marginRight: 30,
    padding: 5,
    '&:focus': {
        background: 'white',
        outline: 'none',
    }
})

const Delete = glamorous.button({
    background: 'none'
})

export class EditableListElement extends React.PureComponent {
    state = {

    }

    render() {
        return (
            <ListElement>
                <EditableLabel value={this.props.product.name} />
                <EditableLabel value={this.props.product.price} />
                <Label>{parseDiscount(this.props.product.discount)}</Label>
                <Delete>Delete</Delete>
            </ListElement>)
    }
}