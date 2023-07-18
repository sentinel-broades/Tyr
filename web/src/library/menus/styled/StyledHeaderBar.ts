import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledHeaderBar = styled.div<{ theme: Theme }>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 25px;
  background-color: ${(props) => props.theme.bgColPrimary};
  color: ${(props) => props.theme.fontColPrimary};

  .header-text {
    margin-left: ${(props) => props.theme.spacing};
  }
`;

export { StyledHeaderBar };
