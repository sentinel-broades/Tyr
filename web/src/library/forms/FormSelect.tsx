import { IOption } from '../../interfaces/editor/IOption';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import { StyledFormSelect } from './styled';

interface Props {
  name: string;
  label: string;
  value: string;
  onChange: (key: string, value: any) => void;
  values: IOption[];
  editable: boolean;
  callback?: (e: any) => void;
}

const FormSelect = (props: Props) => {
  const { name, label, onChange, value, values, editable, callback } = props;

  const onValueChanged = (e: any) => {
    if (callback) callback(e);

    onChange(name, e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <StyledFormSelect
        labelId={`${name}-label`}
        id={name}
        name={name}
        label={label}
        value={value ? value : ''}
        onChange={(e) => onValueChanged(e)}
        readOnly={!editable}
      >
        {values.map((val, index) => (
          <MenuItem key={index} value={val.key}>
            {val.label}
          </MenuItem>
        ))}
      </StyledFormSelect>
    </FormControl>
  );
};

export { FormSelect };
