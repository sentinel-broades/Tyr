import { StyledPersonList } from './styled';
import {
  BasicCard,
  CardContainer,
  LinkButton,
  PageHeader,
} from '../../library';
import { usePerson } from '../../contexts';
import { useEffect } from 'react';

const PersonList = () => {
  const { onList, PersonState } = usePerson();

  useEffect(() => {
    onList!();
  }, []);

  return (
    <StyledPersonList>
      <PageHeader title={'Person List'} />
      <LinkButton route={'/person/create'} title={'New Person'} />

      <CardContainer>
        {PersonState &&
          PersonState.personList &&
          PersonState.personList.map((person) => {
            return (
              <BasicCard
                key={person.id}
                id={person.id}
                title={`${person.forename} ${person.surname}`}
                viewPrefix={'person'}
              />
            );
          })}
      </CardContainer>
    </StyledPersonList>
  );
};

export { PersonList };
