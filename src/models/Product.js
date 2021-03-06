import PropTypes from 'prop-types';

import { Discount } from './Discount'

export const Product = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inCartAmount: PropTypes.number.isRequired,
    discount: PropTypes.shape(Discount)
}

export const ProductCollection = {
    products: PropTypes.arrayOf(Product)
}