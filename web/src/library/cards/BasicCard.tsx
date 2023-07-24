import { CardActions, CardContent } from '@mui/material';
import { StyledBasicCard } from './styled';
import { LinkButton } from '../buttons';

interface Props {
  title: string;
  id: number;
  content?: any;
  viewPrefix?: string;
}

const BasicCard = (props: Props) => {
  const { title, viewPrefix, id, content } = props;

  return (
    <StyledBasicCard>
      <CardContent>{title}</CardContent>
      {content && <CardContent>{content}</CardContent>}
      <CardActions className='action-buttons'>
        {viewPrefix && (
          <LinkButton route={`/${viewPrefix}/detail/${id}`} title={'View'} />
        )}
      </CardActions>
    </StyledBasicCard>
  );
};

export { BasicCard };
