import React from 'react';
import PropTypes from 'prop-types';
import './LessElement.less';

function LessElement(props) {
  return (
    <div className="container">
      <span className="srortainer">
        {props.children}
      </span>
    </div>
  );
}

LessElement.propTypes = {
  children: PropTypes.string,
};

export default LessElement;
