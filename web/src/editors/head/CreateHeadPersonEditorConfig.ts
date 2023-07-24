import { IEditorItem } from '../../interfaces/editor';
import { Control } from '../../enums';

const CreateHeadPersonEditorConfig: IEditorItem[] = [
  {
    key: 'personId',
    label: 'Person',
    placeholder: 'Select person',
    options: [],
    control: Control.Select,
  },
  {
    key: 'startDate',
    label: 'Start Date',
    placeholder: 'Select start date',
    control: Control.Date,
  },
  {
    key: 'endDate',
    label: 'End Date',
    placeholder: 'Select end date',
    control: Control.Date,
  },
];

export { CreateHeadPersonEditorConfig };
