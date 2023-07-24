import { CreateHeadPersonEditor } from '../../pages/head';
import { HeadPersonProvider, PersonProvider } from '../../contexts';

const CreateHeadPersonView = () => {
  return (
    <PersonProvider>
      <HeadPersonProvider>
        <CreateHeadPersonEditor />
      </HeadPersonProvider>
    </PersonProvider>
  );
};

export { CreateHeadPersonView };
