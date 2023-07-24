import { useNavigate } from 'react-router-dom';
import { StyledLinkButton } from './styled';

interface Props {
  route: string;
  title: string;
}

const LinkButton = (props: Props) => {
  const { route, title } = props;
  const navigate = useNavigate();

  return (
    <StyledLinkButton variant='contained' onClick={() => navigate(route)}>
      {title}
    </StyledLinkButton>
  );
};

export { LinkButton };
