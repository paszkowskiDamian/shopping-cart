import PropTypes from 'prop-types'
import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add } from '../actions/actions'
import { aggregatedProductsSelector } from '../selectors/aggregatedProductsSelector'

import { ProductCollection } from '../models/Product'

const mapStateToProps = (state) => ({
    products: aggregatedProductsSelector(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ add }, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
export class List extends PureComponent {

    render() {
        console.log(this.props)
        return (
            <div>
                List
            </div>
        );
    }
}

List.propTypes = {
    products: PropTypes.shape(ProductCollection)
}