import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'

import { ListWrapper } from './ListComponents'
import { EditableListElement } from './EditableListElement'
import { AddNewProduct } from './AddNewProduct'

const Header = glamorous.h2({
    fontWeight: 300
})

export function ProductManager(props) {
    return (
        <div>
            <Header >Products:</Header>
            <ListWrapper>
                {props.products.map(product => <EditableListElement
                    key={product.id}
                    product={product}
                    updateName={(name) => props.updateName(product.id, name)}
                    deleteProduct={() => props.deleteProduct(product.id)}
                    updatePrice={(price) => props.updatePrice(product.id, price)}
                />)}
                <AddNewProduct addNewProduct={props.addNewProduct} />
            </ListWrapper>
        </div>
    )
}

ProductManager.propTypes = {
    addNewProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    updateName: PropTypes.func.isRequired,
    updatePrice: PropTypes.func.isRequired,
}

