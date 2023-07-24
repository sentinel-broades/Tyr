import { HeadPersonProvider, SquadProvider } from '../../contexts';
import { SquadDetail } from '../../pages';

const SquadDetailView = () => {
  return (
    <SquadProvider>
      <HeadPersonProvider>
        <SquadDetail />
      </HeadPersonProvider>
    </SquadProvider>
  );
};

export { SquadDetailView };
