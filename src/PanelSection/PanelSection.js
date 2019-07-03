import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import BtnIcon from '../BtnIcon/BtnIcon';
import './PanelSection.less';

class PanelSection extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const panelSectionClasses = classnames(
      'section'
    );

    console.log(this.props);
    return (
      <section className={panelSectionClasses}>
        <section className="section-heading">
          <h2 className="heading-2">{this.props.header}</h2>
          {this.props.btnIcon}
        </section>
      </section>
    );
  }
}


PanelSection.propTypes = {
  header: PropTypes.string,
  btnIcon: PropTypes.node,
};

PanelSection.defaultProps = {
  header: 'Header',
  btnIcon: <BtnIcon />
};

export default PanelSection;
