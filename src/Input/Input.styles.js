import styled from 'react-emotion';
import * as colors from '../styles/colors.json';
import * as sizes from '../styles/sizes.json';
import * as typography from '../styles/typography.json';

const ControlWrapper = styled.div`
  height: 24px;
  border-bottom: 1px solid ${colors.silver.dark10};
  margin-right: 8px;
  float: left;
  display: flex;
  position: relative;
  font-feature-settings: "tnum" 1, "ss09" 1;
	letter-spacing: 0.3px;

  ${(props) => {
    if (props.disabled === true) {
      return `
        opacity: 0.4;
        pointer-events: none;
        border-color: transparent;
      `;
    }
  }}
`;

const InputWrapper = styled.div`
  flex: 1 auto;
`;

const InputLabel = styled.label`
  width: 14px;
  height: 14px;
  position: absolute;
  left: 0;
  bottom: 2px;
  color: #b3b3b3;
  font-size: 10px;
`;

const InputField = styled.input`
  width: 100%;
  height: 23px;
  border: 0;
  font-size: 13px;
  font-weight: 400;
  font-family: ${typography.fontFamily};
  color: ${colors.gray.light10};
  background-color: transparent;
  position: relative;
  z-index: 2;
  font-feature-settings: "tnum" 1, "ss09" 1;
`;


export { ControlWrapper, InputWrapper, InputLabel, InputField }