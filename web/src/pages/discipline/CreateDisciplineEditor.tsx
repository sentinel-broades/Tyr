import { StyledCreateDisciplineEditor } from './styled';
import { EditorForm, PageHeader } from '../../library';
import { CreateDisciplineEditorConfig } from '../../editors';
import { useDiscipline } from '../../contexts';
import { INewDiscipline } from '../../../../common/interfaces';
import { useNavigate } from 'react-router-dom';

const CreateDisciplineEditor = () => {
  const navigate = useNavigate();
  const { onCreate } = useDiscipline();
  const discipline: INewDiscipline = { name: '', description: '' };

  const create = async (object: any) => {
    if (!onCreate) return;
    const res = await onCreate(object);
    if (res) navigate('/discipline/list');
  };

  return (
    <StyledCreateDisciplineEditor>
      <PageHeader title='Create Discipline' />
      <EditorForm
        object={discipline}
        onSave={create}
        items={CreateDisciplineEditorConfig}
      />
    </StyledCreateDisciplineEditor>
  );
};

export { CreateDisciplineEditor };
