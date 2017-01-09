import React, { Component } from 'react';
import Info from './Info';


class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
    };
  }

  submitForm(e) {
    e.preventDefault();
    // handle validations here
    this.props.showBanner();
    this.setState({
      password: '',
      email: ''
    });
  }

  render() {
    return (
      <form className="login-form">
        <Info />
        <h3 className="login-form__title">Login</h3>
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
