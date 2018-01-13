import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { singOut } from '../actions/actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({ singOut }, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
export class Dashboard extends React.Component {
    render() {
        return (
            <div onClick={this.props.singOut} >Dashboard</div>
        )
    }
}