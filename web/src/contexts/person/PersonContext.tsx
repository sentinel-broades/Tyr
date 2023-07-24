import { INewPerson, IPerson } from 'tyr-common';
import { IOption } from '../../interfaces/editor/IOption';
import { createContext, useContext, useState } from 'react';
import { apiGet, apiPost } from '../../api';

interface PersonProps {
  PersonState?: {
    personList: IPerson[] | null;
    person: IPerson | null;
  };
  onList?: () => Promise<IPerson[]>;
  onPersonOptionsList?: () => Promise<IOption[]>;
  onCreate?: (person: INewPerson) => Promise<number>;
  onLoad?: (id: number) => Promise<void>;
  onUpdate?: (person: IPerson) => void;
}

const PersonContext = createContext<PersonProps>({});

const usePerson = () => {
  return useContext(PersonContext);
};

const PersonProvider = ({ children }: any) => {
  const [personState, setPersonState] = useState<{
    personList: IPerson[] | null;
    person: IPerson | null;
  }>({ personList: null, person: null });

  const list = async () => {
    return apiGet('/people').then((res) => {
      setPersonState({ ...personState, personList: res });
      return res;
    });
  };

  const personOptionsList = async (): Promise<IOption[]> => {
    return apiGet('/people').then((res) => {
      return res.map((person: IPerson) => {
        return {
          label: `${person.forename} ${person.surname}`,
          key: person.id,
        };
      });
    });
  };

  const create = async (person: INewPerson): Promise<number> => {
    return await apiPost('/person', person);
  };

  const load = async (id: number) => {
    return apiGet(`/person/${id}`).then((res) => {
      setPersonState({ ...personState, person: res });
    });
  };

  const update = (person: IPerson) => {};

  const value = {
    PersonState: personState,
    onList: list,
    onPersonOptionsList: personOptionsList,
    onCreate: create,
    onLoad: load,
    onUpdate: update,
  };

  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
};

export { PersonProvider, usePerson };
