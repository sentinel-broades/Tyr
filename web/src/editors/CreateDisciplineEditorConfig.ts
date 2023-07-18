import { IEditorItem } from '../interfaces/editor';
import { Control } from '../enums';

const CreateDisciplineEditorConfig: IEditorItem[] = [
  {
    key: 'name',
    label: 'Name',
    placeholder: 'Enter discipline name',
    control: Control.Text,
  },
];

export { CreateDisciplineEditorConfig };
