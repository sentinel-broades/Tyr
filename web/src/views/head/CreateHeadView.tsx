import { DisciplineProvider, HeadProvider, RoleProvider } from '../../contexts';
import { CreateHeadEditor } from '../../pages';

const CreateHeadView = () => {
  return (
    <HeadProvider>
      <DisciplineProvider>
        <RoleProvider>
          <CreateHeadEditor />
        </RoleProvider>
      </DisciplineProvider>
    </HeadProvider>
  );
};

export { CreateHeadView };
