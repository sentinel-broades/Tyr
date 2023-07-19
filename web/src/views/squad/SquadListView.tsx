import { SquadProvider } from '../../contexts';
import { SquadList } from '../../pages';

const SquadListView = () => {
  return (
    <SquadProvider>
      <SquadList />
    </SquadProvider>
  );
};

export { SquadListView };
