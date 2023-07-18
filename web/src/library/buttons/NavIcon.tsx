import { useNavigate } from 'react-router-dom';
import { StyledNavIcon } from './styled';
import { IconButton } from '@mui/material';

interface Props {
  route: string;
  title: string;
  children: any;
}

const NavIcon = (props: Props) => {
  const { route, title, children } = props;
  const navigate = useNavigate();

  return (
    <StyledNavIcon title={title}>
      <IconButton onClick={() => navigate(route)}>{children}</IconButton>
    </StyledNavIcon>
  );
};

export { NavIcon };
