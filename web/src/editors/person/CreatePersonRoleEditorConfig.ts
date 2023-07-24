import { IEditorItem } from '../../interfaces/editor';
import { Control } from '../../enums';

const CreatePersonRoleEditorConfig: IEditorItem[] = [
  {
    key: 'roleId',
    label: 'Role',
    placeholder: 'Select role',
    options: [],
    control: Control.Select,
  },
  {
    key: 'startDate',
    label: 'Start Date',
    placeholder: 'Enter start date',
    control: Control.Date,
  },
  {
    key: 'endDate',
    label: 'End Date',
    placeholder: 'Enter end date',
    control: Control.Date,
  },
];

export { CreatePersonRoleEditorConfig };
