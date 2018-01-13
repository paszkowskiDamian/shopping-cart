import glamorous from 'glamorous'
import React from 'react';

import { List } from '../components/List'
import { Receipt } from '../components/Receipt'

const Wrapper = glamorous.div({
    display: 'flex',
    boxSizing: 'border-box',
    width: '100%',
    padding: '0 30px',
    paddingTop: 20,
})

export function CartPage() {
    return (
        <Wrapper>
            <List />
            <Receipt />
        </Wrapper>
    )
}