import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledAppContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: ${(props) => props.theme.spacing};

  .app-core {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  }

  .route-container {
    background-color: ${(props) => props.theme.bgColPrimary};
    width: 100%;
    padding: ${(props) => props.theme.spacingX2};
    margin: ${(props) => props.theme.spacing} 0 0
      ${(props) => props.theme.spacing};
  }
`;

export { StyledAppContainer };
