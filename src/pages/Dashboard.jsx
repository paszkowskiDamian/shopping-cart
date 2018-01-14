import glamorous from 'glamorous';
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { aggregatedProductsSelector } from '../selectors/aggregatedProductsSelector'
import { ProductManager } from '../components/ProductManager'

import {
    addNewProduct,
    deleteProduct,
    updateName,
    updatePrice,
    addDiscount,
    deleteDiscount,
} from '../actions/updateDataActions'
import { signOut } from '../actions/authActions'

const mapStateToProps = state => ({
    products: aggregatedProductsSelector(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    signOut,
    addNewProduct,
    deleteProduct,
    updateName,
    updatePrice,
    addDiscount,
    deleteDiscount
}, dispatch)

const Wrapper = glamorous.div({
    margin: '0 30px'
})

@connect(mapStateToProps, mapDispatchToProps)
export class Dashboard extends React.Component {
    render() {
        return (
            <Wrapper>
                <ProductManager
                    products={this.props.products}
                    addNewProduct={this.props.addNewProduct}
                    deleteProduct={this.props.deleteProduct}
                    updateName={this.props.updateName}
                    updatePrice={this.props.updatePrice}
                    addDiscount={this.props.addDiscount}
                    deleteDiscount={this.props.deleteDiscount} />
            </Wrapper>
        )
    }
}