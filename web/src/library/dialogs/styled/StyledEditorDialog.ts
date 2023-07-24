import { Dialog } from '@mui/material';
import styled from 'styled-components';
import { Theme } from '../../../themes/Theme';

const StyledEditorDialog = styled(Dialog)<{ theme: Theme }>`
  .MuiPaper-root {
    background: ${(props) => props.theme.bgColTertiary};
  }

  .MuiDialogTitle-root {
    background: ${(props) => props.theme.bgColSecondary};
    color: ${(props) => props.theme.fontColPrimary};
  }

  .title {
    background-color: ${(props) => props.theme.bgColPrimary};
  }
`;
export { StyledEditorDialog };
