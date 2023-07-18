import { Button } from '@mui/material';
import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledLinkButton = styled(Button)<{ theme: Theme }>`
  color: ${(props) => props.theme.fontColPrimary} !important;
  background-color: ${(props) => props.theme.bgColSecondary} !important;
`;
export { StyledLinkButton };
