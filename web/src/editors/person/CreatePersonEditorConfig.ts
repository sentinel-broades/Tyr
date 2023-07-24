import { IEditorItem } from '../../interfaces/editor';
import { Control } from '../../enums';

const CreatePersonEditorConfig: IEditorItem[] = [
  {
    key: 'forename',
    label: 'Forename',
    placeholder: 'Enter forename',
    control: Control.Text,
  },
  {
    key: 'surname',
    label: 'Surname',
    placeholder: 'Enter surname',
    control: Control.Text,
  },
  {
    key: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    control: Control.Text,
  },
  {
    key: 'roleId',
    label: 'Role',
    placeholder: 'Select role',
    options: [],
    control: Control.Select,
  },
];

export { CreatePersonEditorConfig };
