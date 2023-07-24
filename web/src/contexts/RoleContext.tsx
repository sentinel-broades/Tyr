import { INewRole, IRole } from 'tyr-common';
import { createContext, useContext, useState } from 'react';
import { apiGet, apiPost } from '../api';
import { IOption } from '../interfaces/editor/IOption';

interface RoleProps {
  RoleState?: {
    roleList: IRole[] | null;
  };
  onList?: () => Promise<void>;
  onRoleOptionsList?: () => Promise<IOption[]>;
  onCreate?: (role: INewRole) => Promise<number>;
  onLoad?: (id: number) => void;
  onUpdate?: (role: IRole) => void;
}

const RoleContext = createContext<RoleProps>({});

const useRole = () => {
  return useContext(RoleContext);
};

const RoleProvider = ({ children }: any) => {
  const [roleState, setRoleState] = useState<{ roleList: IRole[] | null }>({
    roleList: null,
  });

  const list = async () => {
    apiGet('/roles').then((res) => {
      setRoleState({ ...roleState, roleList: res });
    });
  };

  const optionsList = async (): Promise<IOption[]> => {
    return apiGet('/roles').then((res) => {
      return res.map((role: IRole) => {
        return {
          label: role.name,
          key: role.id,
        };
      });
    });
  };

  const create = async (role: INewRole): Promise<number> => {
    return await apiPost('/role', role);
  };

  const load = (id: number) => {};

  const update = (role: IRole) => {};

  const value = {
    RoleState: roleState,
    onList: list,
    onRoleOptionsList: optionsList,
    onCreate: create,
    onLoad: load,
    onUpdate: update,
  };

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};

export { RoleProvider, useRole };
