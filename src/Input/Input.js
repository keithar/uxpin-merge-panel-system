import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ControlWrapper, InputWrapper, InputLabel, InputField } from './Input.styles';

class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true,
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      isDisabled: props.disabled,
    };
  }

  render() {
    return (
      <ControlWrapper disabled={this.state.isDisabled}>
        <InputWrapper>
          <InputLabel></InputLabel>
          <InputField
            type="text"
            placeholder={this.props.placeholder}
            title={this.props.title}
            value={this.props.value}
          />
        </InputWrapper>
      </ControlWrapper>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(['size1', 'size2', 'size3', 'size4', 'size5', 'size6', 'size7', 'size8']),
  labelPosition: PropTypes.oneOf(['no label', 'inside', 'under']),
  title: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  size: 'size1',
  labelPosition: 'empty',
  disabled: false,
};

export default Input;