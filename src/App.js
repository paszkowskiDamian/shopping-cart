import glamorous from 'glamorous'
import React, { Component } from 'react';

import { List } from './components/List'
import { Receipt } from './components/Receipt'

const Wrapper = glamorous.div({
  display: 'flex',
  width: '100%',
})
class App extends Component {
  render() {
    return (
      <Wrapper>
        <List />
        <Receipt />
      </Wrapper>
    );
  }
}

export default App;
