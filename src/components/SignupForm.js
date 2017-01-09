import React, { Component } from 'react';
import Info from './Info';


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

  submitForm(e) {
    e.preventDefault();
    // handle validations here
    this.props.showBanner();
    this.setState({
      email: '',
      name: '',
      password: '',
      passwordConfirm: ''
    });
  }

  render() {
    return (
      <form className="login-form">
        <Info />
        <h3 className="login-form__title">Sign Up</h3>
        <label>Full Name</label>
        <input
          type="text"
          className="login-form__input"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })} />
        <label>Email Address</label>
        <input
          type="text"
          className="login-form__input"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })} />
        <label>Password</label>
        <input
          type="password"
          className="login-form__input"
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })} />
          <label>Confrim Password</label>
          <input
            type="password"
            className="login-form__input"
            value={this.state.passwordConfirm}
            onChange={e => this.setState({ passwordConfirm: e.target.value })} />

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
