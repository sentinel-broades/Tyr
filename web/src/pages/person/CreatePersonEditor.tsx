import { StyledCreatePersonEditor } from './styled';
import { useNavigate } from 'react-router-dom';
import { usePerson, useRole } from '../../contexts';
import { INewPerson } from 'tyr-common';
import { EditorForm, PageHeader } from '../../library';
import { CreatePersonEditorConfig } from '../../editors';
import { EditorMode } from '../../enums';
import { useEffect, useState } from 'react';
import { IEditorItem } from '../../interfaces/editor';

const CreatePersonEditor = () => {
  const navigate = useNavigate();
  const { onCreate } = usePerson();
  const { onRoleOptionsList } = useRole();
  const person: INewPerson = { forename: '', surname: '', email: '' };
  const [config, setConfig] = useState<IEditorItem[] | null>(null);

  useEffect(() => {
    const list = async () => {
      const c = CreatePersonEditorConfig;
      c[3].options = await onRoleOptionsList!();
      setConfig(c);
    };

    list().then();
  }, []);
  const create = async (object: any) => {
    const res = await onCreate!(object);
    if (res) navigate('/person/list');
  };

  return (
    <StyledCreatePersonEditor>
      <PageHeader title={'Create Person'} />
      {config && (
        <EditorForm
          object={person}
          onSave={create}
          items={config}
          mode={EditorMode.Edit}
        />
      )}
    </StyledCreatePersonEditor>
  );
};

export { CreatePersonEditor };
