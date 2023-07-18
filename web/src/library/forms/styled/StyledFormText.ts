import { TextField } from '@mui/material';
import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledFormText = styled(TextField)<{ theme: Theme }>`
  background-color: ${(props) => props.theme.bgColTertiary};
  width: 100%;
  margin: ${(props) => props.theme.spacing} 0 !important;

  .MuiFormLabel-root,
  .MuiFormHelperText-root,
  .MuiInputBase-root,
  .MuiOutlinedInput-root {
    color: ${(props) => props.theme.fontColSecondary} !important;
  }
`;

export { StyledFormText };
