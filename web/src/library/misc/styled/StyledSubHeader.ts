import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledSubHeader = styled.h3<{ theme: Theme }>`
  color: ${(props) => props.theme.fontColPrimary};
`;

export { StyledSubHeader };
