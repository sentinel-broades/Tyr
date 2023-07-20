import { StyledCreateRoleEditor } from './styled';
import { useNavigate } from 'react-router-dom';
import { INewRole } from '../../../../common/interfaces';
import { useDiscipline, useRole } from '../../contexts';
import { EditorForm, PageHeader } from '../../library';
import { useEffect, useState } from 'react';
import { CreateRoleEditorConfig } from '../../editors';
import { IEditorItem } from '../../interfaces/editor';
import { EditorMode } from '../../enums';

const CreateRoleEditor = () => {
  const navigate = useNavigate();
  const { onCreate } = useRole();
  const role: INewRole = { name: '', description: '' };
  const [config, setConfig] = useState<IEditorItem[] | null>(null);

  const { onDisciplineOptionsList, DisciplineState } = useDiscipline();
  useEffect(() => {
    const list = async () => {
      const c = CreateRoleEditorConfig;
      c[1].options = await onDisciplineOptionsList!();
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
        <EditorForm
          object={role}
          onSave={create}
          items={config}
          mode={EditorMode.Edit}
        />
      ) : (
        <>Loading</>
      )}
    </StyledCreateRoleEditor>
  );
};

export { CreateRoleEditor };
