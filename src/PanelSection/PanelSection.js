import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import BtnIcon from '../BtnIcon/BtnIcon';
import './PanelSection.less';
import ControlsWrapper from '../ControlsWrapper/ControlsWrapper';

class PanelSection extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const panelSectionClasses = classnames(
      'section',
      this.props.state,
      this.props.headerVisible
    );

    return (
      <section className={panelSectionClasses}>
        <section className="section-heading">
          <h2 className="heading-2">{this.props.header}</h2>
          {this.props.btnIcon}
        </section>
        {this.props.children}
      </section>
    );
  }
}


PanelSection.propTypes = {
  headerVisible: PropTypes.oneOf(['header-visible', 'no-header']),
  header: PropTypes.string,
  btnIcon: PropTypes.node,
  children: PropTypes.node,
  state: PropTypes.oneOf(['collapsed', 'expanded']),
};

PanelSection.defaultProps = {
  header: 'Header',
  state: 'expanded',
  headerVisible: 'header-visible',
};

export default PanelSection;
