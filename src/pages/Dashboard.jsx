import glamorous from 'glamorous';
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { singOut } from '../actions/actions'
import { aggregatedProductsSelector } from '../selectors/aggregatedProductsSelector'
import { ProductManager } from '../components/ProductManager'

const mapStateToProps = state => ({
    products: aggregatedProductsSelector(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({ singOut }, dispatch)

const Wrapper = glamorous.div({
    margin: '0 30px'
})
@connect(mapStateToProps, mapDispatchToProps)
export class Dashboard extends React.Component {
    render() {
        return (
            <Wrapper>
                <ProductManager products={this.props.products} />
            </Wrapper>
        )
    }
}