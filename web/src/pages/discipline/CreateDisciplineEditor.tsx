import { StyledCreateDisciplineEditor } from './styled';
import { EditorForm } from '../../library';
import { CreateDisciplineEditorConfig } from '../../editors';
import { useState } from 'react';
import { useDiscipline } from '../../contexts';
import { INewDiscipline } from '../../../../common/interfaces';
import { useNavigate } from 'react-router-dom';

const CreateDisciplineEditor = () => {
  const navigate = useNavigate();
  const [discipline, setDiscipline] = useState<INewDiscipline>({
    name: '',
    description: '',
  });
  const { onCreate } = useDiscipline();

  const create = async (object: any) => {
    console.log(object);

    if (!onCreate) return;

    const res = await onCreate(object);

    if (res) navigate('/discipline/list');
  };

  return (
    <StyledCreateDisciplineEditor>
      <h1>Create Discipline</h1>
      <EditorForm
        object={discipline}
        onSave={create}
        items={CreateDisciplineEditorConfig}
      />
    </StyledCreateDisciplineEditor>
  );
};

export { CreateDisciplineEditor };
