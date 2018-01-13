import glamorous from 'glamorous'
import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'

import { CartPage } from './pages/CartPage'
import { Dashboard } from './pages/Dashboard'
import { SignUpPage } from './pages/SignUpPage'
import { PrivateRoute } from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={CartPage} />
        <Route path="/login" component={SignUpPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Fragment>
    );
  }
}

export default App;
