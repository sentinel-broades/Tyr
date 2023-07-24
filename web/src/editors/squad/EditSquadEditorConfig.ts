import { IEditorItem } from '../../interfaces/editor';
import { Control } from '../../enums';

const EditSquadEditorConfig: IEditorItem[] = [
  {
    key: 'name',
    label: 'Name',
    placeholder: 'Enter squad name',
    control: Control.Text,
  },
];

export { EditSquadEditorConfig };
