import {
  PersonProvider,
  PersonRoleProvider,
  PersonSalaryProvider,
} from '../../contexts';
import { PersonDetail } from '../../pages';

const PersonDetailView = () => {
  return (
    <PersonProvider>
      <PersonRoleProvider>
        <PersonSalaryProvider>
          <PersonDetail />
        </PersonSalaryProvider>
      </PersonRoleProvider>
    </PersonProvider>
  );
};

export { PersonDetailView };
