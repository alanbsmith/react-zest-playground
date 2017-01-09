import React, { Component } from 'react';
import '../assets/stylesheets/Info.scss';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false
    }
  }
  renderInfoText() {
    if (!this.state.showInfo) { return false; }

    return (
      <div className="info__text">
        fill out the form with your information
      </div>
    )
  }

  render() {
    return (
      <div className="info">
      {this.renderInfoText()}
      <a
        onClick={() => this.setState({ showInfo: !this.state.showInfo })}
        className="info__btn" />
      </div>
    )
  }
}

export default Info;
