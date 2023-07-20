import { StyledSidebar } from './styled';
import { INavLink } from '../../../../common/interfaces';
import { NavLink } from '../';

const Sidebar = () => {
  const links: INavLink[] = [
    { route: '/discipline/list', title: 'Disciplines' },
    { route: '/role/list', title: 'Roles' },
    { route: '/person/list', title: 'People' },
    { route: '/squad/list', title: 'Squads' },
    { route: '/software/list', title: 'Software' },
  ];

  return (
    <StyledSidebar>
      <div className='sidebar'>
        {links.map((link: INavLink, index) => {
          return <NavLink key={index} route={link.route} title={link.title} />;
        })}
      </div>
    </StyledSidebar>
  );
};

export { Sidebar };
