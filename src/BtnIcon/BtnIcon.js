import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as Icons from '../icons';
import './BtnIcon.less';

class BtnIcon extends PureComponent {
  render() {
    const btnIconClasses = classnames(
      'button-icon',
      { disabled: this.props.disabled },
      this.props.style,
      this.props.size,
      this.props.labelPosition,
      this.props.alt,
      this.props.iconSize
    );
    const Icon = Icons[this.props.icon];

    return (
      <div className={btnIconClasses} title={this.props.title}>
        <label>{this.props.labelValue}</label>
        <Icon />
      </div>
    );
  }
}

BtnIcon.propTypes = {
  size: PropTypes.oneOf(['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7', 'size-8']),
  labelPosition: PropTypes.oneOf(['no-label', 'label-under']),
  icon: PropTypes.oneOf([
    'AccessibilitySvg',
    'ActionArrangeBottomSvg',
    'ActionArrangeLeftSvg',
    'ActionArrangeRightSvg',
    'ActionArrangeTopSvg',
    'ActionArrangeVerticalCenterSvg',
    'ActionArrangeVerticalMiddleSvg',
    'ActionCloseSvg',
    'ActionDistributeHorizontallySvg',
    'ActionDistributeVerticallySvg',
    'ActionElementFlipSvg',
    'ActionMultipropertyUnlockBordersSvg',
    'ActionMultipropertyUnlockCornersSvg',
    'ArrowPlaySvg',
    'ChevronDownDarkSvg',
    'ElementShapeSvg',
    'ElementsBoxSvg',
    'ElementsButtonSvg',
    'ElementsHotspotSvg',
    'ElementsIconSvg',
    'ElementsImageSvg',
    'ElementsTextElementSvg',
    'ExternalEditorSvg',
    'EyeDropperSvg',
    'FeatureLayersSvg',
    'FeatureMobileSvg',
    'FilterSvg',
    'FolderClosedSvg',
    'FolderOpenedSvg',
    'GearSvg',
    'GridViewSvg',
    'HexSvg',
    'HslSvg',
    'InteractionsIconSvg',
    'LayoutMediumTileSvg',
    'LibrariesSimpleSvg',
    'LinkChainBreakSvg',
    'ListViewSvg',
    'MenuSvg',
    'OptionsViewSvg',
    'PenToolSvg',
    'PinSimpleSvg',
    'PlusSvg',
    'QuestionMarkSolidSvg',
    'RgbIconSvg',
    'SearchIconSvg',
    'ShareOpenedSvg',
    'SmartGridSvg',
    'SwitcherSvg',
    'TypographyAlignCenterSvg',
    'TypographyAlignJustifySvg',
    'TypographyAlignLeftSvg',
    'TypographyAlignRightSvg',
    'TypographyFixedHeightSvg',
    'TypographyFixedWidthSvg',
    'TypographyVerticalAlignBottomSvg',
    'TypographyVerticalAlignMiddleSvg',
    'TypographyVerticalAlignTopSvg',
    'VariableSvg',
    'VisibilitySolidHiddenSvg',
    'VisibilitySolidVisibleSvg',
  ]),
  iconSize: PropTypes.oneOf(['small-icon', 'medium-icon', 'big-icon']),
  style: PropTypes.oneOf(['light', 'ghost']),
  title: PropTypes.string,
  disabled: PropTypes.bool,
  labelValue: PropTypes.string,
  alt: PropTypes.string,
};

BtnIcon.defaultProps = {
  size: 'size-1',
  icon: 'PlusSvg',
  iconSize: 'small-icon',
  style: 'light',
  disabled: false,
};

export default BtnIcon;
