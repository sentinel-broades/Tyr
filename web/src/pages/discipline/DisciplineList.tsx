import {
  BasicCard,
  CardContainer,
  LinkButton,
  PageHeader,
} from '../../library';
import { StyledDisciplineList } from './styled';
import { useEffect } from 'react';
import { useDiscipline } from '../../contexts';

const DisciplineList = () => {
  const { onList, DisciplineState } = useDiscipline();
  useEffect(() => {
    onList && onList();
  }, []);

  return (
    <StyledDisciplineList>
      <PageHeader title='Discipline List' />
      <LinkButton route={'/discipline/create'} title={'New Discipline'} />

      <CardContainer>
        {DisciplineState &&
          DisciplineState.disciplineList &&
          DisciplineState.disciplineList.map((discipline) => {
            return <BasicCard key={discipline.id} title={discipline.name} />;
          })}
      </CardContainer>
    </StyledDisciplineList>
  );
};

export { DisciplineList };
