import * as React from 'react';
import BtnIcon from '../../BtnIcon/BtnIcon';
import PanelSection from '../PanelSection';

export default (
  <PanelSection
    header="Header"
    state="expanded"
    headerVisible="header-visible">
    <BtnIcon
      icon="plusSvg"
      style="ghost"
    />
  </PanelSection>
);
