import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledEditorForm = styled.div<{ theme: Theme }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacingX2};
`;
export { StyledEditorForm };
