import { StyledPersonRoleHistory } from './styled';
import { usePerson, usePersonRole } from '../../contexts';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { BasicCard, SubHeader, LinkButton } from '../';
import { IPersonRoleHistory } from 'tyr-common';

const PersonRoleHistory = () => {
  const { PersonState } = usePerson();
  const { PersonRoleState, onList } = usePersonRole();
  const { id } = useParams();

  useEffect(() => {
    onList!(parseInt(id!));
  }, []);

  const cardContent = (personRole: IPersonRoleHistory) => {
    return (
      <div className='roleDates'>
        <span className='roleDateEntry'>
          Start Date : {new Date(personRole.startDate).toLocaleDateString()}
        </span>
        <span className='roleDateEntry'>
          End Date :
          {personRole.endDate
            ? new Date(personRole.endDate).toLocaleDateString()
            : 'Current'}
        </span>
      </div>
    );
  };

  return (
    <StyledPersonRoleHistory>
      <SubHeader title={'Role History'} />
      {PersonState!.person && (
        <LinkButton
          route={`/person/role/create/${PersonState?.person.id}`}
          title={'New Role'}
        />
      )}
      {PersonRoleState!.personRoleList &&
        PersonRoleState?.personRoleList.map((personRole) => {
          return (
            <BasicCard
              title={personRole.roleName}
              id={personRole.id}
              content={cardContent(personRole)}
            />
          );
        })}
      ;
    </StyledPersonRoleHistory>
  );
};

export { PersonRoleHistory };
