import { IEditorItem } from '../interfaces/editor';
import { Control } from '../enums';

const CreateRoleEditorConfig: IEditorItem[] = [
  {
    key: 'name',
    label: 'Name',
    placeholder: 'Enter role name',
    control: Control.Text,
  },
  {
    key: 'disciplineId',
    label: 'Discipline',
    placeholder: 'Select discipline',
    options: [],
    control: Control.Select,
  },
];

export { CreateRoleEditorConfig };
