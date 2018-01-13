import React from 'react'

export const Editable = (Component) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            value: this.props.value
        }
    }

    handleChange = (event) => this.setState({ value: Number(event.target.value) })


    handleFocus = () => this.setState({ isEditing: true, value: this.props.value })

    handleBlur = () => {
        this.setState({ isEditing: false })
        this.props.updateAction(this.state.value)
    }

    render() {
        return <Component
            {...this.props}
            value={this.state.isEditing ? this.state.value : this.props.value}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
        />
    }
}