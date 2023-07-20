import { PersonProvider, RoleProvider } from '../../contexts';
import { CreatePersonEditor } from '../../pages';

const CreatePersonView = () => {
  return (
    <PersonProvider>
      <RoleProvider>
        <CreatePersonEditor />
      </RoleProvider>
    </PersonProvider>
  );
};

export { CreatePersonView };
