import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { TextField } from '@mui/material';

const StyledFormCurrency = styled(TextField)<{ theme: Theme }>`
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

export { StyledFormCurrency };
