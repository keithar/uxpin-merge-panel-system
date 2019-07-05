import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
// import BtnIcon from '../BtnIcon/BtnIcon';
import Input from '../Input/Input';
import './ControlsWrapper.less';

class ControlsWrapper extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const controlsWrapperClasses = classnames(
      'controls-group'
    );

    console.log(this.props);
    return (
      <section className={controlsWrapperClasses}>
        {this.props.children}
      </section>
    );
  }
}


ControlsWrapper.propTypes = {
  children: PropTypes.node,
};

ControlsWrapper.defaultProps = {
  // children: <Input />,
};

export default ControlsWrapper;
