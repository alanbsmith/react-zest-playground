import React, { Component } from 'react';
import classnames from 'classnames';


class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValid: true,
      errorText: ''
    }
  }

  validate() {
    const { validationType } = this.props;

    switch(validationType) {
      case 'email':
        return this.validateEmail();
      case 'match':
        return this.validateMatch();
      default:
        return this.validatePresence();
    }
  }

  resetErrors() {
    this.setState({
      inputValid: true,
      errorText: ''
    });
  }

  validatePresence() {
    if (!this.props.value) {
      return this.setState({
        inputValid: false,
        errorText: 'This is a required field'
      });
    }
    return this.resetErrors();
  }

  validateEmail() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!this.props.value) {
      return this.setState({
        inputValid: false,
        errorText: 'This is a required field'
      });
    }

    if (!emailRegex.test(this.props.value)) {
      return this.setState({
        inputValid: false,
        errorText: 'Please provide a valid email'
      });
    }
    return this.resetErrors();
  }

  validateMatch() {
    if (this.props.value !== this.props.match) {
      return this.setState({
        inputValid: false,
        errorText: 'Passwords do not match'
      });
    }
    return this.resetErrors();
  }

  render() {
    const inputClasses = classnames(this.props.classNames, {
      invalid: !this.state.inputValid
    });

    return (
      <div>
        <input
          className={inputClasses}
          onBlur={() => this.validate()}
          onChange={e => this.props.onChange(e)}
          placeholder={this.props.placeholder}
          type={this.props.type || 'text'}
          value={this.props.value}
        />
        <div className="input__error-text">
          {this.state.errorText}
        </div>
      </div>
    )
  }
}

export default Input;
