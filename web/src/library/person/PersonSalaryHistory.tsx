import { StyledPersonSalaryHistory } from './styled';
import { usePerson, usePersonSalary } from '../../contexts';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { SubHeader } from '../misc';
import { LinkButton } from '../buttons';
import { BasicCard } from '../cards';
import { IPersonSalaryHistory } from 'tyr-common';

const PersonSalaryHistory = () => {
  const { PersonState } = usePerson();
  const { PersonSalaryState, onList } = usePersonSalary();
  const { id } = useParams();

  useEffect(() => {
    onList!(parseInt(id!));
  }, []);

  const cardContent = (personSalary: IPersonSalaryHistory) => {
    return (
      <div className='roleDates'>
        <span className='roleDateEntry'>
          Start Date : {new Date(personSalary.startDate).toLocaleDateString()}
        </span>
        <span className='roleDateEntry'>
          End Date :
          {personSalary.endDate
            ? new Date(personSalary.endDate).toLocaleDateString()
            : 'Current'}
        </span>
      </div>
    );
  };

  return (
    <StyledPersonSalaryHistory>
      <SubHeader title={'Salary History'} />
      {PersonState!.person && (
        <LinkButton
          route={`/person/salary/create/${PersonState?.person.id}`}
          title={'New Salary'}
        />
      )}
      {PersonSalaryState!.personSalaryList &&
        PersonSalaryState?.personSalaryList.map((personSalary) => {
          return (
            <BasicCard
              title={personSalary.salary.toString()}
              id={personSalary.id}
              content={cardContent(personSalary)}
            />
          );
        })}
      ;
    </StyledPersonSalaryHistory>
  );
};

export { PersonSalaryHistory };
