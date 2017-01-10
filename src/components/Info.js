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
    const infoClasses = this.state.showInfo ? 'info__btn close' : 'info__btn';
    return (
      <div className="info">
      {this.renderInfoText()}
      <a
        onClick={() => this.setState({ showInfo: !this.state.showInfo })}
        className={infoClasses} />
      </div>
    )
  }
}

export default Info;
