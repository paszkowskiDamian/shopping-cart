import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addToCart, removeFromCart, setProductAmount } from '../actions/actions'
import { aggregatedProductsSelector } from '../selectors/aggregatedProductsSelector'
import { ProductCollection } from '../models/Product'
import { ProductListElement } from './ProductListElement'

const mapStateToProps = (state) => ({
    products: aggregatedProductsSelector(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ addToCart, removeFromCart, setProductAmount }, dispatch)

const Wrapper = glamorous.ul({
    flex: 4,
    padding: 0,
})
@connect(mapStateToProps, mapDispatchToProps)
export class List extends PureComponent {
    render() {
        return (
            <Wrapper>
                {this.props.products.map(product => <ProductListElement
                    key={product.id}
                    product={product}
                    addToCart={() => this.props.addToCart(product.id)}
                    removeFromCart={() => this.props.removeFromCart(product.id)}
                    setProductAmount={() => this.props.setProductAmount(product.id)}
                />)}
            </Wrapper>
        );
    }
}

List.propTypes = {
    products: PropTypes.shape(ProductCollection)
}