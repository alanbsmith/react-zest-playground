import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';

import Banner from './Banner';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBanner: false,
      showLogin: true,
    };
  }

  showBanner() {
    this.setState({
      showBanner: true
    });

    setTimeout(() => {
      this.setState({ showBanner: false });
    }, 2000);
  }

  toggleForm(e) {
    e.preventDefault();
    this.setState({
      showBanner: false,
      showLogin: !this.state.showLogin
    });
  }

  renderForm() {
    if (this.state.showLogin) {
      return (
        <LoginForm
          showBanner={() => this.showBanner()}
          toggleForm={e => this.toggleForm(e)} />
      )
    }
    return (
      <SignupForm
        showBanner={() => this.showBanner()}
        toggleForm={e => this.toggleForm(e)} />
    )
  }


  render() {
    return(
      <div className="content">
        <Banner
          show={this.state.showBanner}
          showLogin={this.state.showLogin} />
        {this.renderForm()}
      </div>
    )
  }
};

export default App;
