import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      showBanner: false,
      username: ''
    };
  }

  submitForm(e) {
    e.preventDefault();
    // handle validations here
    this.setState({
      password: '',
      showBanner: true,
      username: ''
    });

    setTimeout(() => {
      this.setState({ showBanner: false });
    }, 2000);
  }

  renderBanner() {
    const bannerClasses = this.state.showBanner ? 'banner' : 'banner hide';

    return (
      <div className={bannerClasses}>
        <p className="banner__text">Login success!</p>
      </div>
    )
  }

  render() {
    return(
      <div className="content">
        {this.renderBanner()}
        <form className="login-form">
          <h3 className="login-form__title">Login</h3>
          <label>Username</label>
          <input
            type="text"
            className="login-form__input"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })} />
          <label>Password</label>
          <input
            type="password"
            className="login-form__input"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })} />
          <button type="submit" className="login-form__submit" onClick={ e => this.submitForm(e) }>
            Login!
          </button>
        </form>
      </div>
    )
  }
};

export default App;
