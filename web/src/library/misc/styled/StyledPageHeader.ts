import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledPageHeader = styled.h1<{ theme: Theme }>`
  color: ${(props) => props.theme.fontColPrimary};
`;

export { StyledPageHeader };
