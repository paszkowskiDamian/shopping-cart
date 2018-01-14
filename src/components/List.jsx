import PropTypes from 'prop-types'
import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addToCart, removeFromCart, setProductAmount } from '../actions/actions'
import { aggregatedProductsSelector } from '../selectors/aggregatedProductsSelector'
import { ProductCollection } from '../models/Product'
import { ProductListElement } from './ProductListElement'
import { ListWrapper } from './ListComponents'
const mapStateToProps = (state) => ({
    products: aggregatedProductsSelector(state),
    auth: state.auth
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ addToCart, removeFromCart, setProductAmount }, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
export class List extends PureComponent {
    render() {
        return (
            <React.Fragment >
                <ListWrapper>
                    {this.props.products.map(product => <ProductListElement
                        key={product.id}
                        product={product}
                        addToCart={() => this.props.addToCart(product.id)}
                        removeFromCart={() => this.props.removeFromCart(product.id)}
                        setProductAmount={(amount) => this.props.setProductAmount(product.id, amount)}
                    />)}
                </ListWrapper>
            </React.Fragment >
        );
    }
}

List.propTypes = {
    products: PropTypes.shape(ProductCollection)
}