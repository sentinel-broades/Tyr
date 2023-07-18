import { StyledSidebar } from './styled';
import { INavLink } from '../../../../common/interfaces';
import { NavLink } from '../';

const Sidebar = () => {
  const links: INavLink[] = [
    { route: '/discipline/list', title: 'Disciplines' },
    { route: '/role/list', title: 'Roles' },
    { route: '/people/list', title: 'People' },
    { route: '/squads/list', title: 'Squads' },
    { route: '/software/list', title: 'Squads' },
    { route: '/hardware/types/list', title: 'Hardware Types' },
    { route: '/hardware/brands/list', title: 'Hardware Brands' },
    { route: '/head/list', title: 'Headcount' },
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
