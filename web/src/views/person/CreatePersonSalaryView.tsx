import { PersonSalaryProvider } from '../../contexts';
import { CreatePersonSalaryEditor } from '../../pages';

const CreatePersonSalaryView = () => {
  return (
    <PersonSalaryProvider>
      <CreatePersonSalaryEditor />
    </PersonSalaryProvider>
  );
};

export { CreatePersonSalaryView };
