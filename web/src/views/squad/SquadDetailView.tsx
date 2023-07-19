import { SquadProvider } from '../../contexts';
import { SquadDetail } from '../../pages';

const SquadDetailView = () => {
  return (
    <SquadProvider>
      <SquadDetail />
    </SquadProvider>
  );
};

export { SquadDetailView };
