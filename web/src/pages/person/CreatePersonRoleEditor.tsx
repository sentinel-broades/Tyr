import { StyledCreatePersonRoleEditor } from './styled';
import { useNavigate, useParams } from 'react-router-dom';
import { usePersonRole, useRole } from '../../contexts';
import { INewPersonRole } from 'tyr-common';
import { useEffect, useState } from 'react';
import { IEditorItem } from '../../interfaces/editor';
import { CreatePersonRoleEditorConfig } from '../../editors';
import { EditorForm, PageHeader } from '../../library';
import { EditorMode } from '../../enums';

const CreatePersonRoleEditor = () => {
  const navigate = useNavigate();
  const { onCreate } = usePersonRole();
  const { onRoleOptionsList } = useRole();
  const [config, setConfig] = useState<IEditorItem[] | null>(null);
  const { personId } = useParams();
  const personRole: INewPersonRole = {
    personId: parseInt(personId!),
    startDate: new Date(),
  };

  useEffect(() => {
    const list = async () => {
      const c = CreatePersonRoleEditorConfig;
      c[0].options = await onRoleOptionsList!();
      setConfig(c);
    };

    list().then();
  }, []);

  const create = async (object: any) => {
    const res = await onCreate!(object);
    if (res) navigate(`/person/detail/${personId}`);
  };

  return (
    <StyledCreatePersonRoleEditor>
      <PageHeader title={'Create Person Role'} />
      {config && (
        <EditorForm
          object={personRole}
          onSave={create!}
          items={config}
          mode={EditorMode.Edit}
        />
      )}
    </StyledCreatePersonRoleEditor>
  );
};

export { CreatePersonRoleEditor };
