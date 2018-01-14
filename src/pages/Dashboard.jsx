import glamorous from 'glamorous';
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { singOut } from '../actions/authActions'
import { aggregatedProductsSelector } from '../selectors/aggregatedProductsSelector'
import { ProductManager } from '../components/ProductManager'

import { addNewProduct, deleteProduct, updateName, updatePrice, addDiscount } from '../actions/updateDataActions'

const mapStateToProps = state => ({
    products: aggregatedProductsSelector(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    singOut,
    addNewProduct,
    deleteProduct,
    updateName,
    updatePrice,
    addDiscount,
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
                    addDiscount={this.props.addDiscount} />
            </Wrapper>
        )
    }
}