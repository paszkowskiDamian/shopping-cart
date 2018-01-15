import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router, } from 'react-router-dom'

import { CartPage } from './pages/CartPage'
import { Dashboard } from './pages/Dashboard'
import { SignUpPage } from './pages/SignUpPage'
import { PrivateRoute } from './components/PrivateRoute'
import { Navigation } from './components/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route render={props => <Navigation {...props} />} />
          <Route exact path="/" component={CartPage} />
          <Route path="/login" component={SignUpPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
