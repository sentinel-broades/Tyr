import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledPersonRoleHistory = styled.div<{ theme: Theme }>`
  .roleDates {
    display: flex;
    flex-wrap: wrap;
  }

  .roleDateEntry {
    font-size: ${(props) => props.theme.fontSzXSmall};
  }
`;

export { StyledPersonRoleHistory };
