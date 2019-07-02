import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Input.less';

class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isInputFocused: false,
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput() {
    this.setState({
      isInputFocused: !this.state.isInputFocused,
    });
  }

  render() {
    const controlWrapperClasses = classnames(
      'control',
      { disabled: this.props.disabled },
      this.props.size,
      this.props.style,
      this.props.labelPosition,
      { focused: this.state.isInputFocused }
    );

    return (
      <div className={controlWrapperClasses}>
        <label>{this.props.labelValue}</label>
        <div className="input">
          <input
            className="input-field"
            type="text"
            placeholder={this.props.placeholder}
            title={this.props.title}
            value={this.props.value}
            onFocus={this.handleInput}
            onBlur={this.handleInput}
          />
        </div>
      </div>
    );
  }
}


Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7', 'size-8']),
  style: PropTypes.oneOf(['light', 'full-stroke']),
  labelPosition: PropTypes.oneOf(['no-label', 'label-inside', 'label-under']),
  labelValue: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  size: 'size-4',
  style: 'light',
  labelPosition: 'no-label',
  disabled: false,
};

export default Input;