import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add } from '../actions/actions'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ add }, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
export class List extends PureComponent {
    render() {
        console.log(this.props)
        return (
            <div>
                List
            </div>
        );
    }
}
