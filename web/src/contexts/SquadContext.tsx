import { ISquad } from '../../../common/interfaces';
import { IOption } from '../interfaces/editor/IOption';
import { createContext, useContext, useState } from 'react';
import { apiGet, apiPost } from '../api';

interface SquadProps {
  SquadState?: {
    squadList: ISquad[] | null;
    squad: ISquad | null;
  };
  onList?: () => Promise<ISquad[]>;
  onOptionsList?: () => Promise<IOption[]>;
  onCreate?: (squad: ISquad) => Promise<number>;
  onLoad?: (id: number) => Promise<void>;
  onUpdate?: (squad: ISquad) => void;
}

const SquadContext = createContext<SquadProps>({});

const useSquad = () => {
  return useContext(SquadContext);
};

const SquadProvider = ({ children }: any) => {
  const [squadState, setSquadState] = useState<{
    squadList: ISquad[] | null;
    squad: ISquad | null;
  }>({
    squadList: null,
    squad: null,
  });

  const list = async () => {
    return apiGet('/squads').then((res) => {
      setSquadState({ ...squadState, squadList: res });
      return res;
    });
  };

  const optionsList = async (): Promise<IOption[]> => {
    return apiGet('/squads').then((res) => {
      return res.map((squad: ISquad) => {
        return {
          label: squad.name,
          key: squad.id,
        };
      });
    });
  };

  const create = async (squad: ISquad): Promise<number> => {
    return await apiPost('/squad', squad);
  };

  const load = async (id: number) => {
    apiGet(`/squad/${id}`).then((res) => {
      setSquadState({ ...squadState, squad: res });
    });
  };

  const update = (squad: ISquad) => {};

  const value = {
    SquadState: squadState,
    onList: list,
    onDisciplineOptionsList: optionsList,
    onCreate: create,
    onLoad: load,
    onUpdate: update,
  };

  return (
    <SquadContext.Provider value={value}>{children}</SquadContext.Provider>
  );
};

export { SquadProvider, useSquad };
