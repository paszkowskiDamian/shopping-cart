import glamorous from 'glamorous'
import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'

import { CartPage } from './pages/CartPage'
import { Dashboard } from './pages/Dashboard'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={CartPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Fragment>
    );
  }
}

export default App;
