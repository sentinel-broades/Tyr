import { DisciplineProvider } from '../../contexts';
import { CreateDisciplineEditor } from '../../pages';

const CreateDisciplineView = () => {
  return (
    <DisciplineProvider>
      <CreateDisciplineEditor />
    </DisciplineProvider>
  );
};

export { CreateDisciplineView };
