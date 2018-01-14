import glamorous from 'glamorous';
import React from 'react'

import { ListElement, Label, InputLabel } from './ListComponents'
import { AddDiscount } from './AddDiscount'
import { parseDiscount } from '../helpers/discountParser'
import { Editable } from './Editable'

const EditableLabel = Editable(InputLabel)

const Delete = glamorous.button({
    background: 'none',
    cursor: 'pointer',
})

export class EditableListElement extends React.PureComponent {
    render() {
        return (
            <ListElement>
                <EditableLabel value={this.props.product.name} />
                <EditableLabel value={this.props.product.price} />
                {this.props.product.discount
                    ? <Label>{parseDiscount(this.props.product.discount)}</Label>
                    : <AddDiscount addDiscount={this.props.addDiscount} />}
                <Delete onClick={this.props.deleteProduct}>Delete</Delete>
            </ListElement>)
    }
}