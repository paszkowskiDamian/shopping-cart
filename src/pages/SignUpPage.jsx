import glamorous from 'glamorous'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';

import { signUp } from '../actions/authActions'

import { colors } from '../styles/theme'
import { shadow } from '../styles/shared'

const Wrapper = glamorous.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
})

const LoginForm = glamorous.div({
    background: colors.cardColor,
    width: 350,
    height: 350,
    boxSizing: 'border-box',
    padding: 30,
}, shadow, )

const Header = glamorous.h2({
    fontWeight: 300,
})

const Form = glamorous.div({
    display: 'flex',
    flexDirection: 'column',
})

const InputGroup = glamorous.div({
    display: 'flex',
    flexDirection: 'column',
    padding: '15px 0',
})

const Input = glamorous.input({
    padding: 5,
    '&:focus': {
        outline: 'none',
    }
})

const Label = glamorous.label({
    fontSize: 12,
    marginBottom: 3,
})

const Button = glamorous.button({
    marginTop: 25,
    background: 'none',
})

const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = (dispatch) => bindActionCreators({ signUp }, dispatch)
@connect(mapStateToProps, mapDispatchToProps)
export class SignUpPage extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleInput = (type) => (event) => this.setState({ [type]: event.target.value })

    render() {
        return (
            !this.props.auth.isLoggedIn
                ? < Wrapper >
                    <LoginForm>
                        <Header>Sign up</Header>
                        <Form>
                            <InputGroup>
                                <Label>email</Label>
                                <Input onChange={this.handleInput('email')} />
                            </InputGroup>
                            <InputGroup>
                                <Label>password</Label>
                                <Input type="password" onChange={this.handleInput('password')} />
                            </InputGroup>
                            <Button onClick={() => this.props.signUp(this.state.email, this.state.password)} >Sign up</Button>
                        </Form>
                    </LoginForm>
                </Wrapper >
                : <Redirect to={{
                    pathname: '/dashboard'
                }} />
        )
    }
}