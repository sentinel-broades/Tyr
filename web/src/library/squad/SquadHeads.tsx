import { StyledSquadHeads } from './styled';
import { LinkButton } from '../buttons';
import { useHead, useSquad } from '../../contexts';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardContainer, HeadCard } from '../cards';

const SquadHeads = () => {
  const { SquadState } = useSquad();
  const { HeadState, onList } = useHead();
  const { id } = useParams();

  useEffect(() => {
    onList!(parseInt(id!));
  }, []);

  return (
    <StyledSquadHeads>
      <h1>SquadHeads</h1>
      {SquadState!.squad && (
        <LinkButton
          route={`/head/create/${SquadState!.squad.id}`}
          title={'New Head'}
        />
      )}
      <CardContainer>
        {HeadState &&
          HeadState.headList &&
          HeadState.headList.map((head) => {
            return <HeadCard key={head.id} head={head} />;
          })}
        ;
      </CardContainer>
    </StyledSquadHeads>
  );
};

export { SquadHeads };
