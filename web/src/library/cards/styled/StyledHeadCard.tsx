import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledHeadCard = styled.div<{ theme: Theme }>`
  width: 200px;
  margin: ${(props) => props.theme.spacing};
  background-color: ${(props) => props.theme.bgColTertiary} !important;
  color: ${(props) => props.theme.fontColSecondary} !important;

  .action-buttons {
    flex-direction: row-reverse;
  }

  .card-image {
    min-height: 200px;
  }

  .card-body-heading {
    height: 50px;
  }
`;

export { StyledHeadCard };
