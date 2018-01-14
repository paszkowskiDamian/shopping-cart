import glamorous from 'glamorous'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signOut } from '../actions/authActions'
import { authSelector } from '../selectors/stateSelectors'

export const StylesLink = glamorous(Link)({
    fontWeight: 300,
    marginRight: 30,
    '&:visited, &:link, &:active': {
        textDecoration: 'none',
        color: 'black',
    }
})

const SignOut = glamorous.button({
    background: 'none',
    border: 'none',
    fontWeight: 300,
    cursor: 'pointer',
})

const Wrapper = glamorous.nav({
    marginTop: 20,
    marginLeft: 30,
})

const mapStateToProps = state => ({
    auth: authSelector(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({ signOut }, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
export class Navigation extends React.Component {
    render() {
        const button = window.location.pathname === "/"
            ? {
                url: '/dashboard',
                verbose: 'Dashboard'
            }
            : {
                url: '/',
                verbose: 'Back to cart'
            }
        return (
            <Wrapper>
                {this.props.auth.isLoggedIn && <span>
                    <StylesLink to={button.url}>{button.verbose}</StylesLink>
                    <SignOut onClick={this.props.signOut}>Sign out</SignOut>
                </span>}
            </Wrapper>)
    }
}