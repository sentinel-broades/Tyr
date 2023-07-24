import { StyledSquadDetail } from './styled';
import { PageHeader, SquadDetailEditor, SquadHeads } from '../../library';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSquad } from '../../contexts';

const SquadDetail = () => {
  const { id } = useParams();
  const { SquadState, onLoad } = useSquad();

  useEffect(() => {
    if (id) onLoad!(parseInt(id));
  }, []);

  return (
    <StyledSquadDetail>
      <PageHeader title={'Squad Detail'} />
      <SquadDetailEditor />
      <hr />
      <SquadHeads />
    </StyledSquadDetail>
  );
};

export { SquadDetail };
