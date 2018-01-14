import glamorous from 'glamorous';
import React from 'react'

import { ListElement, Label, InputLabel } from './ListComponents'
import { AddDiscount } from './AddDiscount'
import { parseDiscount } from '../helpers/discountParser'
import { Editable } from './Editable'

const EditableLabel = Editable(InputLabel)

const DiscountLabel = glamorous(Label)({
    position: 'relative',
    '& > button': {
        visibility: 'hidden'
    },
    '&:hover > button': {
        visibility: 'visible'
    }
})

const Delete = glamorous.button({
    background: 'none',
    cursor: 'pointer',
})

const DeleteDiscount = glamorous(Delete)({
    marginLeft: 10,
    position: 'absolute',
})
export function EditableListElement(props) {
    return (
        <ListElement>
            <EditableLabel value={props.product.name} />
            <EditableLabel value={props.product.price} />
            {props.product.discount
                ? <DiscountLabel>
                    {parseDiscount(props.product.discount)}
                    <DeleteDiscount onClick={() => props.deleteDiscount(props.product.discount.id)} >X</DeleteDiscount>
                </DiscountLabel>
                : <AddDiscount addDiscount={props.addDiscount} />}
            <Delete onClick={props.deleteProduct}>Delete</Delete>
        </ListElement>)
}