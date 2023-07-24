import { StyledCreateHeadPersonEditor } from './styled';
import { useNavigate, useParams } from 'react-router-dom';
import { INewHeadPerson } from 'tyr-common';
import { useEffect, useState } from 'react';
import { IEditorItem } from '../../interfaces/editor';
import { useHeadPerson, usePerson } from '../../contexts';
import { CreateHeadPersonEditorConfig } from '../../editors';
import { EditorForm, PageHeader } from '../../library';
import { EditorMode } from '../../enums';

const CreateHeadPersonEditor = () => {
  const { headId, squadId } = useParams();
  const headPerson: INewHeadPerson = {
    headId: parseInt(headId!),
    startDate: new Date(),
  };
  const [config, setConfig] = useState<IEditorItem[] | null>(null);
  const { onPersonOptionsList } = usePerson();
  const { onCreate } = useHeadPerson();
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const c = CreateHeadPersonEditorConfig;
      c[0].options = await onPersonOptionsList!();
      setConfig(c);
    };

    list().then();
  }, []);

  const create = async (object: any) => {
    const res = await onCreate!(object);
    if (res) navigate(`/squad/detail/${squadId}`);
  };

  return (
    <StyledCreateHeadPersonEditor>
      <PageHeader title={'Link Person to Head'} />
      {config && (
        <EditorForm
          object={headPerson}
          onSave={create}
          items={config}
          mode={EditorMode.Edit}
        />
      )}
    </StyledCreateHeadPersonEditor>
  );
};

export { CreateHeadPersonEditor };
