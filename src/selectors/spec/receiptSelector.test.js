import { receiptSelector } from '../receiptSelector'

describe('receiptSelector', () => {

    it('should calculate price of the cart', () => {
        const state = {
            products: {
                '-L2m7EYirum6xS4H38qU': {
                    name: 'Apple',
                    price: 0.25
                }
            },
            discounts: {},
            cart: {
                '-L2m7EYirum6xS4H38qU': 2
            }
        }

        expect(receiptSelector(state).basketPrice).toEqual(0.5)
        expect(receiptSelector(state).withoutDiscount).toEqual(0.5)

    })

    it('should apply discounts to cart price', () => {
        const state = {
            products: {
                '-L2m7EYirum6xS4H38qU': {
                    name: 'Apple',
                    price: 0.25
                },
                '-L2mUjpBBW_CPSgVxSSA': {
                    name: 'Papaya',
                    price: 0.5
                }
            },
            discounts: {
                '-L2mUo6rz-INOEgrjYY8': {
                    buy: '3',
                    pay: '2',
                    productId: '-L2mUjpBBW_CPSgVxSSA'
                }
            },
            cart: {
                '-L2m7EYirum6xS4H38qU': 2,
                '-L2mUjpBBW_CPSgVxSSA': 3
            }
        }

        expect(receiptSelector(state).basketPrice).toEqual(1.5)
    })

    it('should return price without discounts', () => {
        const state = {
            products: {
                '-L2m7EYirum6xS4H38qU': {
                    name: 'Apple',
                    price: 0.25
                },
                '-L2mUjpBBW_CPSgVxSSA': {
                    name: 'Papaya',
                    price: 0.5
                }
            },
            discounts: {
                '-L2mUo6rz-INOEgrjYY8': {
                    buy: '3',
                    pay: '2',
                    productId: '-L2mUjpBBW_CPSgVxSSA'
                }
            },
            cart: {
                '-L2m7EYirum6xS4H38qU': 2,
                '-L2mUjpBBW_CPSgVxSSA': 3
            }
        }

        expect(receiptSelector(state).withoutDiscount).toEqual(2)
    })

})