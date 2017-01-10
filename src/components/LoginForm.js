import React, { Component } from 'react';
import Info from './Info';
import Input from './Input';
import '../assets/stylesheets/Form.scss';


class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  inputValidation() {
    const errors = [];
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    switch (true) {
      case !this.state.email.length:
        errors.push('Email is a required field');
      case !emailRegex.test(this.state.email):
        errors.push('Please provide a valid email address');
      case !this.state.password.length:
        errors.push('Password is a required field');
      case errors.length:
        this.props.showBanner({ type: 'warning', text: errors.join(', ') });
        return false;
      default:
        return true;
    }
  }

  submitForm(e) {
    e.preventDefault();
    if (this.inputValidation()) {
      this.props.showBanner({ text: 'Login success!'});
      this.setState({
        password: '',
        email: ''
      });
    }
  }

  render() {
    return (
      <form className="login-form">
        <Info />
        <h3 className="login-form__title">Login</h3>
        <label>Email Address</label>
        <Input
          classNames="login-form__input"
          onChange={e => this.setState({ email: e.target.value })}
          placeholder="hello@example.com"
          value={this.state.email}
          validationType="email" />
        <label>Password</label>
        <Input
          classNames="login-form__input"
          placeholder="••••••••••••"
          onChange={e => this.setState({ password: e.target.value })}
          type="password"
          value={this.state.password} />
        <button type="submit" className="login-form__submit" onClick={ e => this.submitForm(e) }>
          Login!
        </button>
        <div className="login-form__toggle">
          <a href="#" onClick={e => this.props.toggleForm(e)}>don't have an account? sign up!</a>
        </div>
      </form>
    )
  }
}

export default LoginForm;
