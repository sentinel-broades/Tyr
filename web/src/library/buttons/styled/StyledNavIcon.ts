import { Tooltip } from '@mui/material';
import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledNavIcon = styled(Tooltip)<{ theme: Theme }>`
  color: ${(props) => props.theme.fontColPrimary} !important;
`;
export { StyledNavIcon };
