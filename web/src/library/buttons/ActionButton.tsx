import { StyledActionButton } from './styled';

interface Props {
  action: any;
  title: string;
}

const ActionButton = (props: Props) => {
  const { action, title } = props;

  return (
    <StyledActionButton variant='contained' onClick={action}>
      {title}
    </StyledActionButton>
  );
};

export { ActionButton };
