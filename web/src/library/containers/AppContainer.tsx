import { StyledAppContainer } from './styled';
import { AppRoutes } from '../../routes';
import { HeaderBar, Sidebar } from '../';

const AppContainer = () => {
  return (
    <StyledAppContainer>
      <HeaderBar />
      <div className='app-core'>
        <Sidebar />
        <div className='route-container'>
          <AppRoutes />
        </div>
      </div>
    </StyledAppContainer>
  );
};

export { AppContainer };
