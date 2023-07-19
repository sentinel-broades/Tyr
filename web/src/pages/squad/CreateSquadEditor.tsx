import { StyledCreateSquadEditor } from './styled';
import { EditorForm, PageHeader } from '../../library';
import { useNavigate } from 'react-router-dom';
import { useSquad } from '../../contexts';
import { INewSquad } from '../../../../common/interfaces';
import { CreateSquadEditorConfig } from '../../editors';

const CreateSquadEditor = () => {
  const navigate = useNavigate();
  const { onCreate } = useSquad();
  const squad: INewSquad = { name: '', description: '' };

  const create = async (object: any) => {
    const res = await onCreate!(object);
    if (res) navigate('/squad/list');
  };

  return (
    <StyledCreateSquadEditor>
      <PageHeader title='Create Squad' />
      <EditorForm
        object={squad}
        onSave={create}
        items={CreateSquadEditorConfig}
      />
    </StyledCreateSquadEditor>
  );
};

export { CreateSquadEditor };
