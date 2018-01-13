import glamorous from 'glamorous'
import { PropTypes } from 'prop-types'
import React from 'react'

import { colors } from '../styles/theme'

const Wrapper = glamorous.div({
    display: 'flex',
    borderTop: `1px solid ${colors.lightGray}`
})

const Title = glamorous.div({
    flex: 0
})

const Amount = glamorous.div({
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
})

export function Summary(props) {
    return (
        <Wrapper>
            <Title>Summary</Title>
            <Amount>
                {(props.basketPrice !== props.withoutDiscount) && <del>{props.basketPrice}CHF</del>}
                <div>{props.withoutDiscount}CHF</div>
            </Amount>
        </Wrapper>
    )
}

Summary.propTypes = {
    basketPrice: PropTypes.number.isRequired,
    withoutDiscount: PropTypes.number.isRequired,
}