import { StyledSquadHeads } from './styled';
import { LinkButton } from '../buttons';
import { useHead, useHeadPerson, useSquad } from '../../contexts';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardContainer, HeadCard } from '../cards';
import { SubHeader } from '../misc';

const SquadHeads = () => {
  const { SquadState } = useSquad();
  const { HeadPersonState, onList } = useHeadPerson();
  const { id } = useParams();

  useEffect(() => {
    onList!(parseInt(id!));
  }, []);

  return (
    <StyledSquadHeads>
      <SubHeader title={'Squad Heads'} />
      {SquadState!.squad && (
        <LinkButton
          route={`/head/create/${SquadState!.squad.id}`}
          title={'New Head'}
        />
      )}
      <CardContainer>
        {HeadPersonState &&
          HeadPersonState.headPersonList &&
          HeadPersonState.headPersonList.map((head) => {
            return <HeadCard key={head.headId} head={head} />;
          })}
        ;
      </CardContainer>
    </StyledSquadHeads>
  );
};

export { SquadHeads };
