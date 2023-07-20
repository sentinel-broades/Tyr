import { PersonProvider } from '../../contexts';
import { PersonList } from '../../pages';

const PersonListView = () => {
  return (
    <PersonProvider>
      <PersonList />
    </PersonProvider>
  );
};

export { PersonListView };
