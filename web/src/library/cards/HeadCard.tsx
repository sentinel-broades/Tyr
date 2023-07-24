import { CardActions, CardContent } from '@mui/material';
import { StyledHeadCard } from './styled';
import { NavIcon } from '../buttons';
import { IHeadPerson } from 'tyr-common';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LinkIcon from '@mui/icons-material/Link';

interface Props {
  head: IHeadPerson;
}

const HeadCard = (props: Props) => {
  const { head } = props;

  return (
    <StyledHeadCard isVacant={head.personName === 'Vacant' ? 1 : 0}>
      <CardContent className='card-header'>{head.roleName}</CardContent>
      <CardContent className='card-body'>
        <span className={'head-name'}>{head.personName}</span>
        <span className={'head-from'}>
          {new Date(head.headStartDate).toLocaleDateString()}
        </span>
        <span className={'head-budget'}>{head.budget}</span>
      </CardContent>
      <CardActions className='action-buttons'>
        <NavIcon route={`/head/detail/${head.headId}`} title={'View'}>
          <VisibilityIcon />
        </NavIcon>
        <NavIcon
          route={`/head/person/create/${head.squadId}/${head.headId}`}
          title={'Link'}
        >
          <LinkIcon />
        </NavIcon>
      </CardActions>
    </StyledHeadCard>
  );
};

export { HeadCard };
