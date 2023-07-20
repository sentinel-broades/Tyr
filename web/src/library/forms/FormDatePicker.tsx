import { StyledFormDatePicker } from './styled';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';

interface Props {
  name: string;
  label: string;
  value: Date;
  onChange: any;
  editable: boolean;
}

const FormDatePicker = (props: Props) => {
  const { name, label, value, onChange, editable } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledFormDatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          onChange(name, newValue);
        }}
        disabled={!editable}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export { FormDatePicker };
