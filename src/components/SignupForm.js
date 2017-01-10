import React, { Component } from 'react';
import Info from './Info';
import Input from './Input';
import '../assets/stylesheets/Form.scss';


class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: '',
      passwordConfirm: ''
    };
  }

  inputValidation() {
    const errors = [];
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!this.state.name.length) {
      errors.push('Name is a required field');
    }

    if (!this.state.email.length) {
      errors.push('Email is a required field');
    }

    if (!this.state.password.length) {
      errors.push('Password is a required field');
    }

    if (!this.state.password === this.state.passwordConfirm) {
      errors.push('Passwords do not match');
    }

    if (!emailRegex.test(this.state.email)) {
      errors.push('Please provide a valid email address');
    }

    if (errors.length) {
      this.props.showBanner({ type: 'warning', text: errors.join(', ') });
      return false;
    }
    return true;
  }

  submitForm(e) {
    e.preventDefault();
    // handle validations here
    if (this.inputValidation()) {
      this.props.showBanner({ text: 'Sign up success!' });
      this.setState({
        email: '',
        name: '',
        password: '',
        passwordConfirm: ''
      });
    }
  }

  render() {
    return (
      <form className="login-form">
        <Info />
        <h3 className="login-form__title">Sign Up</h3>
        <label>Full Name</label>
        <Input
          classNames="login-form__input"
          placeholder="Zesty McZesterton"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })} />
        <label>Email Address</label>
        <Input
          classNames="login-form__input"
          placeholder="hello@example.com"
          value={this.state.email}
          validationType="email"
          onChange={e => this.setState({ email: e.target.value })} />
        <label>Password</label>
        <Input
          classNames="login-form__input"
          onChange={e => this.setState({ password: e.target.value })}
          placeholder="••••••••••••"
          type="password"
          value={this.state.password} />
          <label>Confirm Password</label>
          <Input
            classNames="login-form__input"
            match={this.state.password}
            onChange={e => this.setState({ passwordConfirm: e.target.value })}
            placeholder="••••••••••••"
            type="password"
            validationType="match"
            value={this.state.passwordConfirm} />

        <button type="submit" className="login-form__submit" onClick={ e => this.submitForm(e) }>
          Sign up!
        </button>
        <div className="login-form__toggle">
          <a href="#" onClick={e => this.props.toggleForm(e)}>already have an account? log in!</a>
        </div>
      </form>
    )
  }
}

export default SignupForm;
