export const parseDiscount = discount => discount ? `Buy ${discount.buy} pay for ${discount.pay}` : ''

export const parsePrice = price => price < 1 ? `${price * 100} ct` : `${price} CHF`
