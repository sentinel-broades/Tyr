import { useState } from 'react';
import { StyledEditorForm } from './styled';
import { Control } from '../../enums';
import { FormText } from './FormText';
import { IEditorItem } from '../../interfaces/editor';

interface Props {
  object: any;
  onSave: (object: any) => void;
  items: IEditorItem[];
}

const EditorForm = (props: Props) => {
  const { object, onSave, items } = props;
  const [obj, setObj] = useState(object);

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
                editable={true}
                key={item.key}
                value={obj[item.key]}
                placeholder={item.placeholder}
                onChange={onObjChange}
              />
            );

          default:
            return <span>Invalid Form Control</span>;
        }
      })}

      <button onClick={() => onSave(obj)}>Save</button>
    </StyledEditorForm>
  );
};

export { EditorForm };
