import { StyledFormText } from './styled';

interface Props {
  placeholder: string;
  onChange: any;
  editable: boolean;
  value: string;
  name: string;
  label: string;
}

const FormText = (props: Props) => {
  const { placeholder, onChange, editable, value, name, label } = props;

  return (
    <StyledFormText
      id={name}
      name={name}
      label={label}
      value={value}
      onChange={(e) => {
        props.onChange(name, e.target.value);
      }}
      disabled={!editable}
      placeholder={placeholder}
    />
  );
};

export { FormText };
