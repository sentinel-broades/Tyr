import { IEditorItem } from '../../interfaces/editor';
import { Control } from '../../enums';

const CreateSquadEditorConfig: IEditorItem[] = [
  {
    key: 'name',
    label: 'Name',
    placeholder: 'Enter squad name',
    control: Control.Text,
  },
];

export { CreateSquadEditorConfig };
