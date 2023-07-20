import { useState } from 'react';
import { StyledEditorForm } from './styled';
import { Control, EditorMode } from '../../enums';
import { FormCurrency, FormDatePicker, FormSelect, FormText } from './';
import { IEditorItem } from '../../interfaces/editor';

interface Props {
  object: any;
  onSave: (object: any) => void;
  items: IEditorItem[];
  mode: EditorMode;
}

const EditorForm = (props: Props) => {
  const { object, onSave, items, mode } = props;
  const [obj, setObj] = useState(object);
  const [formMode, setFormMode] = useState(mode);

  const onObjChange = (key: string, value: any) => {
    setObj({ ...obj, [key]: value });
  };

  return (
    <StyledEditorForm>
      {items.map((item) => {
        switch (item.control) {
          case Control.Text:
            return (
              <FormText
                label={item.label}
                name={item.key}
                editable={formMode === EditorMode.Edit}
                key={item.key}
                value={obj[item.key]}
                placeholder={item.placeholder}
                onChange={onObjChange}
              />
            );

          case Control.Select:
            return (
              <FormSelect
                key={item.key}
                name={item.key}
                label={item.label}
                value={obj[item.key]}
                onChange={onObjChange}
                editable={formMode === EditorMode.Edit}
                values={item.options!}
                callback={item.callback}
              />
            );

          case Control.Currency:
            return (
              <FormCurrency
                label={item.label}
                name={item.key}
                editable={formMode === EditorMode.Edit}
                key={item.key}
                value={obj[item.key]}
                placeholder={item.placeholder}
                onChange={onObjChange}
              />
            );

          case Control.Date:
            return (
              <FormDatePicker
                key={item.key}
                name={item.key}
                label={item.label}
                value={obj[item.key]}
                onChange={onObjChange}
                editable={formMode === EditorMode.Edit}
              />
            );

          default:
            return <span>Invalid Form Control</span>;
        }
      })}

      {formMode === EditorMode.Edit ? (
        <button onClick={() => onSave(obj)}>Save</button>
      ) : (
        <button onClick={() => setFormMode(EditorMode.Edit)}>Edit</button>
      )}
    </StyledEditorForm>
  );
};

export { EditorForm };
