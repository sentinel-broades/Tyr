import { DisciplineProvider, RoleProvider } from '../../contexts';
import { CreateRoleEditor } from '../../pages';

const CreateRoleView = () => {
  return (
    <RoleProvider>
      <DisciplineProvider>
        <CreateRoleEditor />
      </DisciplineProvider>
    </RoleProvider>
  );
};

export { CreateRoleView };
