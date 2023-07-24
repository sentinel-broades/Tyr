import { ITableColumn } from '../../interfaces';

const PersonRoleHistoryColumns: ITableColumn[] = [
  {
    field: 'roleName',
    headerName: 'Role',
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
  },
  {
    field: 'endDate',
    headerName: 'End Date',
  },
];

export { PersonRoleHistoryColumns };
