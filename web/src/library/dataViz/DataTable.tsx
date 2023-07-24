import { StyledDataTable } from './styled';
import { ITableColumn } from '../../interfaces';
import { DataGrid } from '@mui/x-data-grid';

interface Props {
  columns: ITableColumn[];
  rows: any;
}

const DataTable = (props: Props) => {
  const { columns, rows } = props;

  return (
    <StyledDataTable>
      <DataGrid rows={rows} columns={columns} />
    </StyledDataTable>
  );
};

export { DataTable };
