import { Button, Tooltip } from '@mui/material';
import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledNavLink = styled(Button)<{ theme: Theme }>`
  color: ${(props) => props.theme.fontColPrimary} !important;
  text-transform: none !important;
  padding: 0 ${(props) => props.theme.spacing} !important;
  justify-content: flex-start !important;
  font-size: 0 ${(props) => props.theme.fontSzSmall} !important;
  width: 100%;
`;
export { StyledNavLink };
