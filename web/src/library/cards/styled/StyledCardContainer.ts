import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledCardContainer = styled.div<{ theme: Theme }>`
  margin: ${(props) => props.theme.spacingX2} 0;
  display: flex;
`;
export { StyledCardContainer };
