import glamorous from 'glamorous'

import { colors } from '../styles/theme'
import { shadow } from '../styles/shared'

export const ListWrapper = glamorous.ul({
    flex: 3,
    padding: 0,
    margin: 0,
})

export const ListElement = glamorous.li({
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    width: '100%',
    background: colors.cardColor,
    padding: 20,
    margin: '10px 0',
    listStyle: 'none',
    '&:first-of-type': {
        marginTop: 0,
    },
    '&:last-of-type': {
        marginBottom: 0,
    }
}, shadow)

export const Label = glamorous.div(props => ({
    flex: 1,
    display: 'flex',
    justifyContent: props.position ? props.position : 'center',
    alignItems: 'center',
}))