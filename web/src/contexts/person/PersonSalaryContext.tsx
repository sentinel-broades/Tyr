import { INewPersonSalary, IPersonSalaryHistory } from 'tyr-common';
import { createContext, useContext, useState } from 'react';
import { apiGet, apiPost } from '../../api';

interface PersonSalaryProps {
  PersonSalaryState?: {
    personSalaryList: IPersonSalaryHistory[] | null;
  };
  onList?(personId: number): Promise<IPersonSalaryHistory[]>;
  onCreate?(newSalary: INewPersonSalary): Promise<number>;
}

const PersonSalaryContext = createContext<PersonSalaryProps>({});

const usePersonSalary = () => {
  return useContext(PersonSalaryContext);
};

const PersonSalaryProvider = ({ children }: any) => {
  const [personSalaryState, setPersonSalaryState] = useState<{
    personSalaryList: IPersonSalaryHistory[] | null;
  }>({ personSalaryList: null });

  const list = async (personId: number) => {
    return apiGet(`/person/salary/history/${personId}`).then((res) => {
      setPersonSalaryState({ ...personSalaryState, personSalaryList: res });
      return res;
    });
  };

  const create = async (newSalary: INewPersonSalary) => {
    return apiPost(`/person/salary`, newSalary).then((res) => {
      return res;
    });
  };

  const value = {
    PersonSalaryState: personSalaryState,
    onList: list,
    onCreate: create,
  };

  return (
    <PersonSalaryContext.Provider value={value}>
      {children}
    </PersonSalaryContext.Provider>
  );
};

export { PersonSalaryProvider, usePersonSalary };
