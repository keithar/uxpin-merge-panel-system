import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as Icons from '../icons';
import './BtnIcon.less';

function BtnIcon(props) {
  const btnIconClasses = classnames(
    'button-icon',
    { disabled: props.disabled },
    props.style,
    props.size,
    props.labelPosition,
    props.alt
  );

  return (
    <div className={btnIconClasses} title={props.title}>
      <img src={props.icon} alt={props.alt} />
    </div>
  );
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
  style: PropTypes.oneOf(['light', 'ghost']),
  title: PropTypes.string,
  disabled: PropTypes.bool,
  labelValue: PropTypes.string,
  alt: PropTypes.string,
};

BtnIcon.defaultProps = {
  size: 'size-1',
  disabled: false,
  icon: 'PlusSvg',
};

export default BtnIcon;