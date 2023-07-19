import { RoleProvider } from '../../contexts';
import { RoleList } from '../../pages';

const RoleListView = () => {
  return (
    <RoleProvider>
      <RoleList />
    </RoleProvider>
  );
};

export { RoleListView };
