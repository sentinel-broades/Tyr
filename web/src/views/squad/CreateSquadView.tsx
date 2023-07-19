import { SquadProvider } from '../../contexts';
import { CreateSquadEditor } from '../../pages';

const CreateSquadView = () => {
  return (
    <SquadProvider>
      <CreateSquadEditor />
    </SquadProvider>
  );
};

export { CreateSquadView };
