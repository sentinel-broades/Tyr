import { StyledPersonDetail } from './styled';
import {
  PageHeader,
  PersonDetailEditor,
  PersonRoleHistory,
  PersonSalaryHistory,
} from '../../library';
import { useParams } from 'react-router-dom';
import { usePerson } from '../../contexts';
import { useEffect } from 'react';

const PersonDetail = () => {
  const { id } = useParams();
  const { PersonState, onLoad } = usePerson();

  useEffect(() => {
    if (id) onLoad!(parseInt(id));
  }, []);

  return (
    <StyledPersonDetail>
      <PageHeader title={'Person Detail'} />
      <PersonDetailEditor />
      <hr />
      <PersonRoleHistory />
      <hr />
      <PersonSalaryHistory />
    </StyledPersonDetail>
  );
};

export { PersonDetail };
