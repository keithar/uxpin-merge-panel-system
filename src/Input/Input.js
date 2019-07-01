import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Input.less';

function Input(props) {
  const controlWrapperClasses = classnames(
    'control',
    { disabled: props.disabled },
    props.size,
    props.labelPosition
  );

  return (
    <div className={controlWrapperClasses}>
      <label>{props.labelValue}</label>
      <div className="input">
        <input className="input-field"
          type="text"
          placeholder={props.placeholder}
          title={props.title}
          value={props.value}
        />
      </div>
    </div>
  );
}


Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7', 'size-8']),
  labelPosition: PropTypes.oneOf(['no-label', 'label-inside', 'label-under']),
  labelValue: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  size: 'size-4',
  labelPosition: 'no-label',
  disabled: false,
};

export default Input;