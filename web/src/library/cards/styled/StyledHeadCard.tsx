import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledHeadCard = styled.div<{ theme: Theme; isVacant: number }>`
  width: 200px;
  margin: ${(props) => props.theme.spacing};
  background-color: ${(props) => props.theme.bgColTertiary} !important;

  .card-header {
    border-bottom: 1px solid ${(props) => props.theme.bgColSecondary} !important;
    background-color: ${(props) => props.theme.bgColTertiary} !important;
    color: ${(props) => props.theme.fontColSecondary} !important;
  }

  .card-body {
    background-color: ${(props) =>
      props.isVacant
        ? props.theme.bgColError
        : props.theme.bgColSuccess} !important;
    color: ${(props) => props.theme.fontColPrimary} !important;
    margin: ${(props) => props.theme.spacing} !important;
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing};
  }

  .action-buttons {
    border-top: 1px solid ${(props) => props.theme.bgColSecondary} !important;
    gap: ${(props) => props.theme.spacing};
    flex-direction: row-reverse;
  }

  .card-image {
    min-height: 200px;
  }

  .head-from,
  .head-budget {
    font-size: ${(props) => props.theme.fontSzXSmall} !important;
  }

  .card-body-heading {
    height: 50px;
  }
`;

export { StyledHeadCard };
