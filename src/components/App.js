import '../assets/stylesheets/App.scss';
import React, { Component } from 'react';

import Banner from './Banner';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerClasses: '',
      bannerText: '',
      showBanner: false,
      showLogin: true
    };
  }

  showBanner(data) {
    this.setState({
      bannerClasses: data.type,
      bannerText: data.text,
      showBanner: true
    });

    setTimeout(() => {
      this.setState({ showBanner: false });
    }, 5000);
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
          showBanner={(data) => this.showBanner(data)}
          toggleForm={e => this.toggleForm(e)} />
      )
    }
    return (
      <SignupForm
        showBanner={(data) => this.showBanner(data)}
        toggleForm={e => this.toggleForm(e)} />
    )
  }


  render() {
    return(
      <div className="content">
        <Banner
          type={this.state.bannerClasses}
          text={this.state.bannerText}
          show={this.state.showBanner} />
        {this.renderForm()}
      </div>
    )
  }
};

export default App;
