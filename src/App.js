import React, { Component } from 'react';

import { List } from './components/List'

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.add}>Add</button>
        <List />
        {this.props.products}
      </div>
    );
  }
}

export default App;
