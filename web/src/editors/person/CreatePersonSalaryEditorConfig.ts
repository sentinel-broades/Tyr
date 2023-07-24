import { IEditorItem } from '../../interfaces/editor';
import { Control } from '../../enums';

const CreatePersonSalaryEditorConfig: IEditorItem[] = [
  {
    key: 'salary',
    label: 'Salary',
    placeholder: 'Enter Salary',
    options: [],
    control: Control.Currency,
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

export { CreatePersonSalaryEditorConfig };
