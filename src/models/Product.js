import PropTypes from 'prop-types';

export const Product = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}

export const ProductCollection = {
    products: PropTypes.arrayOf(Product)
}