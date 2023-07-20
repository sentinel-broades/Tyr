import { IDiscipline, INewDiscipline } from '../../../common/interfaces';
import { createContext, useContext, useState } from 'react';
import { apiGet, apiPost } from '../api';
import { IOption } from '../interfaces/editor/IOption';

interface DisciplineProps {
  DisciplineState?: {
    disciplineList: IDiscipline[] | null;
  };
  onList?: () => Promise<IDiscipline[]>;
  onDisciplineOptionsList?: () => Promise<IOption[]>;
  onCreate?: (discipline: INewDiscipline) => Promise<number>;
  onLoad?: (id: number) => void;
  onUpdate?: (discipline: IDiscipline) => void;
}

const DisciplineContext = createContext<DisciplineProps>({});

const useDiscipline = () => {
  return useContext(DisciplineContext);
};

const DisciplineProvider = ({ children }: any) => {
  const [disciplineState, setDisciplineState] = useState<{
    disciplineList: IDiscipline[] | null;
  }>({
    disciplineList: null,
  });

  const list = async () => {
    return apiGet('/disciplines').then((res) => {
      setDisciplineState({ ...disciplineState, disciplineList: res });
      return res;
    });
  };

  const optionsList = async (): Promise<IOption[]> => {
    return apiGet('/disciplines').then((res) => {
      return res.map((discipline: IDiscipline) => {
        return {
          label: discipline.name,
          key: discipline.id,
        };
      });
    });
  };

  const create = async (discipline: INewDiscipline): Promise<number> => {
    return await apiPost('/discipline', discipline);
  };
  const load = (id: number) => {};
  const update = (discipline: IDiscipline) => {};

  const value = {
    DisciplineState: disciplineState,
    onList: list,
    onDisciplineOptionsList: optionsList,
    onCreate: create,
    onLoad: load,
    onUpdate: update,
  };

  return (
    <DisciplineContext.Provider value={value}>
      {children}
    </DisciplineContext.Provider>
  );
};

export { DisciplineProvider, useDiscipline };
