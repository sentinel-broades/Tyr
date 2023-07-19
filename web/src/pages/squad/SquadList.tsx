import { StyledSquadList } from './styled';
import { useSquad } from '../../contexts';
import { useEffect } from 'react';
import {
  BasicCard,
  CardContainer,
  LinkButton,
  PageHeader,
} from '../../library';

const SquadList = () => {
  const { onList, SquadState } = useSquad();

  useEffect(() => {
    onList!();
  }, []);

  return (
    <StyledSquadList>
      <PageHeader title={'Squad List'} />
      <LinkButton route={'/squad/create'} title='New Squad' />

      <CardContainer>
        {SquadState &&
          SquadState.squadList &&
          SquadState.squadList.map((squad) => {
            return (
              <BasicCard
                key={squad.id}
                id={squad.id}
                title={squad.name}
                viewPrefix={'squad'}
              />
            );
          })}
      </CardContainer>
    </StyledSquadList>
  );
};

export { SquadList };
