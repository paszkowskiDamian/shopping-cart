import glamorous from 'glamorous'
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ReceiptLine } from './ReceiptLine'
import { aggregateCartSelector } from '../selectors/aggregateCartSelector'
import { receiptSelector } from '../selectors/receiptSelector'
import { Product } from '../models/Product'

import { colors } from '../styles/theme'
import { shadow } from '../styles/shared'


const mapStateToProps = (state) => ({
    cart: aggregateCartSelector(state),
    receipt: receiptSelector(state)
})

const Wrapper = glamorous.div({
    flex: 1,
    minWidth: 350,
    background: colors.cardColor,
    marginLeft: 10,
    padding: 20,
}, shadow)

const Header = glamorous.h2({
    fontWeight: 300,
    padding: 0,
    margin: 0,
})

const List = glamorous.ul({
    listStyle: 'none'
})
@connect(mapStateToProps, undefined)
export class Receipt extends PureComponent {
    render() {
        return (
            <Wrapper>
                <Header>Receipt</Header>
                <List>
                    {this.props.cart.map(product => <ReceiptLine key={product.id} product={product} />)}
                </List>
            </Wrapper>
        );
    }
}

Receipt.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape(Product)
    )
}