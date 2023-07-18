import { useNavigate } from 'react-router-dom';
import { StyledNavLink } from './styled';
import { Button } from '@mui/material';

interface Props {
  route: string;
  title: string;
}

const NavLink = (props: Props) => {
  const { route, title } = props;
  const navigate = useNavigate();

  return <StyledNavLink onClick={() => navigate(route)}>{title}</StyledNavLink>;
};

export { NavLink };
