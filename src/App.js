import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './actions/actions'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...actions }, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.props.add}>Add</button>
        {this.props.products}
      </div>
    );
  }
}

export default App;
