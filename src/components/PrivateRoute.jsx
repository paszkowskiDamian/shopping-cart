import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const mapStateToProps = state => ({
    auth: state.auth
})

@connect(mapStateToProps, undefined)
export class PrivateRoute extends React.PureComponent {
    render() {
        const Component = this.props.component
        return (
            <Route
                path={this.props.path}
                render={() =>
                    this.props.auth.isLoggedIn
                        ? <Component />
                        : <Redirect to={{ pathname: '/login' }
                        } />} />
        )
    }
}

PrivateRoute.propTypes = {
    path: PropTypes.string.isRequired,
}