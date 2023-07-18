import { CardActions, CardContent } from '@mui/material';
import { StyledBasicCard } from './styled';
import { LinkButton } from '../buttons';

interface Props {
  title: string;
}

const BasicCard = (props: Props) => {
  return (
    <StyledBasicCard>
      <CardContent>{props.title}</CardContent>
      <CardActions className='action-buttons'>
        <LinkButton route={'/discipline/edit'} title={'Edit'} />
      </CardActions>
    </StyledBasicCard>
  );
};

export { BasicCard };
