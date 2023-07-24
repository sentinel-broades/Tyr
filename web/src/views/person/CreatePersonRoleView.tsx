import { PersonRoleProvider, RoleProvider } from '../../contexts';
import { CreatePersonRoleEditor } from '../../pages';

const CreatePersonRoleView = () => {
  return (
    <PersonRoleProvider>
      <RoleProvider>
        <CreatePersonRoleEditor />
      </RoleProvider>
    </PersonRoleProvider>
  );
};

export { CreatePersonRoleView };
