import { HeadProvider, SquadProvider } from '../../contexts';
import { SquadDetail } from '../../pages';

const SquadDetailView = () => {
  return (
    <SquadProvider>
      <HeadProvider>
        <SquadDetail />
      </HeadProvider>
    </SquadProvider>
  );
};

export { SquadDetailView };
