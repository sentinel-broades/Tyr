import { CardActions, CardContent } from '@mui/material';
import { StyledHeadCard } from './styled';
import { LinkButton } from '../buttons';
import { IHead } from '../../../../common/interfaces';

interface Props {
  head: IHead;
}

const HeadCard = (props: Props) => {
  const { head } = props;

  return (
    <StyledHeadCard>
      <CardContent>{head.roleName}</CardContent>
      <CardActions className='action-buttons'>
        <LinkButton route={`/head/detail/${head.id}`} title={'View'} />
      </CardActions>
    </StyledHeadCard>
  );
};

export { HeadCard };
