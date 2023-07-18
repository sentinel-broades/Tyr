import { DisciplineProvider } from '../../contexts';
import { DisciplineList } from '../../pages';

const DisciplineListView = () => {
  return (
    <DisciplineProvider>
      <DisciplineList />
    </DisciplineProvider>
  );
};

export { DisciplineListView };
