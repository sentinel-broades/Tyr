import { StyledCreateRoleEditor } from './styled';
import { useNavigate } from 'react-router-dom';
import { INewRole } from '../../../../common/interfaces';
import { useDiscipline, useRole } from '../../contexts';
import { EditorForm, PageHeader } from '../../library';
import { useEffect, useState } from 'react';
import { CreateRoleEditorConfig } from '../../editors';
import { IEditorItem } from '../../interfaces/editor';

const CreateRoleEditor = () => {
  const navigate = useNavigate();
  const { onCreate } = useRole();
  const role: INewRole = { name: '', description: '' };
  const [config, setConfig] = useState<IEditorItem[] | null>(null);

  const { onOptionsList, DisciplineState } = useDiscipline();
  useEffect(() => {
    const list = async () => {
      const c = CreateRoleEditorConfig;
      c[1].options = await onOptionsList!();
      setConfig(c);
    };

    list().then();
  }, []);

  const create = async (object: any) => {
    if (!onCreate) return;

    const res = await onCreate(object);

    if (res) navigate('/role/list');
  };

  return (
    <StyledCreateRoleEditor>
      <PageHeader title={'Create Role'} />
      {config ? (
        <EditorForm object={role} onSave={create} items={config} />
      ) : (
        <>Loading</>
      )}
    </StyledCreateRoleEditor>
  );
};

export { CreateRoleEditor };
