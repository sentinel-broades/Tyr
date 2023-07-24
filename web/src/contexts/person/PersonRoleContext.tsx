import { INewPersonRole, IPersonRoleHistory } from 'tyr-common';
import { createContext, useContext, useState } from 'react';
import { apiGet, apiPost } from '../../api';

interface PersonRoleProps {
  PersonRoleState?: {
    personRoleList: IPersonRoleHistory[] | null;
  };
  onList?: (personId: number) => Promise<IPersonRoleHistory[]>;
  onCreate?: (newRole: INewPersonRole) => Promise<number>;
}

const PersonRoleContext = createContext<PersonRoleProps>({});

const usePersonRole = () => {
  return useContext(PersonRoleContext);
};

const PersonRoleProvider = ({ children }: any) => {
  const [personRoleState, setPersonRoleState] = useState<{
    personRoleList: IPersonRoleHistory[] | null;
  }>({ personRoleList: null });

  const list = async (personId: number) => {
    return apiGet(`/person/role/history/${personId}`).then((res) => {
      setPersonRoleState({ ...personRoleState, personRoleList: res });
      return res;
    });
  };

  const create = async (newRole: INewPersonRole) => {
    return apiPost(`/person/role`, newRole).then((res) => {
      return res;
    });
  };

  const value = {
    PersonRoleState: personRoleState,
    onList: list,
    onCreate: create,
  };

  return (
    <PersonRoleContext.Provider value={value}>
      {children}
    </PersonRoleContext.Provider>
  );
};

export { PersonRoleProvider, usePersonRole };
