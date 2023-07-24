import { StyledCreatePersonSalaryEditor } from './styled';
import { useNavigate, useParams } from 'react-router-dom';
import { usePersonSalary } from '../../contexts';
import { INewPersonSalary } from 'tyr-common';
import { EditorForm, PageHeader } from '../../library';
import { CreatePersonSalaryEditorConfig } from '../../editors';
import { EditorMode } from '../../enums';

const CreatePersonSalaryEditor = () => {
  const navigate = useNavigate();
  const { onCreate } = usePersonSalary();
  const { personId } = useParams();
  const personSalary: INewPersonSalary = {
    personId: parseInt(personId!),
    startDate: new Date(),
    salary: 0,
  };

  const create = async (object: any) => {
    const res = await onCreate!(object);
    if (res) navigate(`/person/detail/${personId}`);
  };

  return (
    <StyledCreatePersonSalaryEditor>
      <PageHeader title={'Create Person Salary'} />
      <EditorForm
        object={personSalary}
        onSave={create}
        items={CreatePersonSalaryEditorConfig}
        mode={EditorMode.Edit}
      />
    </StyledCreatePersonSalaryEditor>
  );
};

export { CreatePersonSalaryEditor };
