import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';
import { DatePicker } from '@mui/x-date-pickers';

const StyledFormDatePicker = styled(DatePicker)<{ theme: Theme }>`
  background-color: ${(props) => props.theme.bgColTertiary};
  width: 100%;
  margin: ${(props) => props.theme.spacingX2} 0 !important;

  .MuiFormLabel-root,
  .MuiFormHelperText-root,
  .MuiInputBase-root,
  .MuiOutlinedInput-root,
  .MuiButtonBase-root {
    color: ${(props) => props.theme.fontColSecondary} !important;
  }
`;

export { StyledFormDatePicker };
