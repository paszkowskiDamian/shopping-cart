import glamorous from 'glamorous';
import React from 'react'

import { ListWrapper } from './ListComponents'
import { EditableListElement } from './EditableListElement'

const Header = glamorous.h2({
    fontWeight: 300
})

export function ProductManager(props) {
    return (
        <div>
            <Header >Products:</Header>
            <ListWrapper>
                {props.products.map(product => <EditableListElement key={product.id} product={product} />)}
            </ListWrapper>
        </div>
    )
}
