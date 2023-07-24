import { StyledEditorDialog } from './styled';
import { IEditorItem } from '../../interfaces/editor';
import { DialogContent, DialogTitle } from '@mui/material';
import { EditorForm } from '../forms';
import { EditorMode } from '../../enums';

interface Props {
  isOpen: boolean;
  title: string;
  config: IEditorItem[];
  object: any;
  onSave: (object: any) => void;
}

const EditorDialog = (props: Props) => {
  const { isOpen, config, title, object, onSave } = props;

  return (
    <StyledEditorDialog open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <EditorForm
          object={object}
          onSave={onSave}
          items={config}
          mode={EditorMode.Edit}
        />
      </DialogContent>
    </StyledEditorDialog>
  );
};

export { EditorDialog };
