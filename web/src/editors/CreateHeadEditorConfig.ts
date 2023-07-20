import { IEditorItem } from '../interfaces/editor';
import { Control } from '../enums';

const CreateHeadEditorConfig: IEditorItem[] = [
  {
    key: 'roleId',
    label: 'Role',
    placeholder: 'Select role',
    options: [],
    control: Control.Select,
  },
  {
    key: 'budget',
    label: 'Budget',
    placeholder: '0.00',
    control: Control.Currency,
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

export { CreateHeadEditorConfig };
