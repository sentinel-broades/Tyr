import { StyledCreateDisciplineEditor } from './styled';
import { EditorForm, PageHeader } from '../../library';
import { CreateDisciplineEditorConfig } from '../../editors';
import { useDiscipline } from '../../contexts';
import { INewDiscipline } from 'tyr-common';
import { useNavigate } from 'react-router-dom';
import { EditorMode } from '../../enums';

const CreateDisciplineEditor = () => {
  const navigate = useNavigate();
  const { onCreate } = useDiscipline();
  const discipline: INewDiscipline = { name: '', description: '' };

  const create = async (object: any) => {
    const res = await onCreate!(object);
    if (res) navigate('/discipline/list');
  };

  return (
    <StyledCreateDisciplineEditor>
      <PageHeader title='Create Discipline' />
      <EditorForm
        object={discipline}
        onSave={create}
        items={CreateDisciplineEditorConfig}
        mode={EditorMode.Edit}
      />
    </StyledCreateDisciplineEditor>
  );
};

export { CreateDisciplineEditor };
