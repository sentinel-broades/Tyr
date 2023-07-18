import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledSidebar = styled.div<{ theme: Theme }>`
  width: 140px;
  background-color: ${(props) => props.theme.bgColPrimary};
  color: ${(props) => props.theme.fontColPrimary};
  min-height: 300px;
  margin-top: ${(props) => props.theme.spacing};
  display: flex;
`;

export { StyledSidebar };
