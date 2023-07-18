import { Control } from '../../enums';

interface IEditorItem {
  key: string;
  label: string;
  placeholder: string;
  options?: string[];
  control: Control;
}

export type { IEditorItem }