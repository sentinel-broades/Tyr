import { StyledCreateHeadEditor } from './styled';
import { EditorForm, PageHeader } from '../../library';
import { INewHead } from 'tyr-common';
import { IEditorItem } from '../../interfaces/editor';
import { useEffect, useState } from 'react';
import { CreateHeadEditorConfig } from '../../editors';
import { EditorMode } from '../../enums';
import { useHead, useRole } from '../../contexts';
import { useNavigate, useParams } from 'react-router-dom';

const CreateHeadEditor = () => {
  const { squadId } = useParams();
  const head: INewHead = {
    squadId: parseInt(squadId!),
    budget: 0,
    startDate: new Date(),
    endDate: null,
  };
  const [config, setConfig] = useState<IEditorItem[] | null>(null);

  const { onRoleOptionsList } = useRole();
  const { onCreate } = useHead();
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const c = CreateHeadEditorConfig;
      c[0].options = await onRoleOptionsList!();
      setConfig(c);
    };

    list().then();
  }, []);

  const create = async (object: any) => {
    const res = await onCreate!(object);
    if (res) navigate(`/squad/detail/${squadId}`);
  };

  return (
    <StyledCreateHeadEditor>
      <PageHeader title={'Create Head'} />
      {config && (
        <EditorForm
          object={head}
          onSave={create}
          items={config}
          mode={EditorMode.Edit}
        />
      )}
    </StyledCreateHeadEditor>
  );
};

export { CreateHeadEditor };
