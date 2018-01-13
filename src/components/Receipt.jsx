import glamorous from 'glamorous'
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ReceiptLine } from './ReceiptLine'
import { Summary } from './Summary'
import { aggregateCartSelector } from '../selectors/aggregateCartSelector'
import { receiptSelector } from '../selectors/receiptSelector'
import { Product } from '../models/Product'
import { CallToAction } from './CallToAction'

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
    listStyle: 'none',
    padding: 0,
})
@connect(mapStateToProps, undefined)
export class Receipt extends PureComponent {
    render() {
        return (
            <div>
                <Wrapper>
                    <Header>Receipt</Header>
                    <List>
                        {this.props.cart.map(product => <ReceiptLine key={product.id} product={product} />)}
                    </List>
                    {this.props.cart.length > 0 ? <Summary {...this.props.receipt} /> : <CallToAction />}
                </Wrapper>
            </div>
        );
    }
}

Receipt.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape(Product)
    ),
    receipt: PropTypes.shape({
        basketPrice: PropTypes.number.isRequired,
        withoutDiscount: PropTypes.number.isRequired,
    })
}