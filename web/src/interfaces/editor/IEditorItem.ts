import { Control } from '../../enums';
import { IOption } from './IOption';

interface IEditorItem {
  key: string;
  label: string;
  placeholder: string;
  options?: IOption[];
  control: Control;
}

export type { IEditorItem };
