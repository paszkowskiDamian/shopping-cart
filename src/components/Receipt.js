import glamorous from 'glamorous'
import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

})

const Wrapper = glamorous.div({
    flex: 1,
    minWidth: 350,
})

@connect(mapStateToProps, undefined)
export class Receipt extends PureComponent {
    render() {
        return (
            <Wrapper>
                Receipt
            </Wrapper>
        );
    }
}
