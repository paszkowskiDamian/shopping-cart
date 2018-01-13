import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    auth: state.auth
})
@withRouter
@connect(mapStateToProps, undefined)
export class PrivateRoute extends React.Component {
    render() {
        const Component = this.props.auth.isLoggedIn
            ? this.props.component
            : () => <Redirect to={{ pathname: '/login' }} />
        return (
            <Route
                path={this.props.path}
                component={Component}
            />
        )
    }
}

PrivateRoute.propTypes = {
    path: PropTypes.string.isRequired,
}