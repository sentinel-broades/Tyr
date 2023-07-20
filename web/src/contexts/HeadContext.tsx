import { IHead } from '../../../common/interfaces';
import { IOption } from '../interfaces/editor/IOption';
import { createContext, useContext, useState } from 'react';
import { apiGet, apiPost } from '../api';

interface HeadProps {
  HeadState?: {
    headList: IHead[] | null;
  };
  onList?: (squadId: number) => Promise<IHead[]>;
  onOptionsList?: () => Promise<IOption[]>;
  onCreate?: (head: IHead) => Promise<number>;
  onLoad?: (id: number) => void;
  onUpdate?: (head: IHead) => void;
}

const HeadContext = createContext<HeadProps>({});

const useHead = () => {
  return useContext(HeadContext);
};

const HeadProvider = ({ children }: any) => {
  const [headState, setHeadState] = useState<{
    headList: IHead[] | null;
  }>({
    headList: null,
  });

  const list = async (squadId: number) => {
    return apiGet(`/heads/${squadId}`).then((res) => {
      setHeadState({ ...headState, headList: res });
      return res;
    });
  };

  const optionsList = async (): Promise<IOption[]> => {
    return apiGet('/heads').then((res) => {
      return res.map((head: IHead) => {
        return {
          label: head.roleName,
          key: head.id,
        };
      });
    });
  };

  const create = async (head: IHead): Promise<number> => {
    return await apiPost('/head', head);
  };

  const load = (id: number) => {};

  const update = (head: IHead) => {};

  const value = {
    HeadState: headState,
    onList: list,
    onDisciplineOptionsList: optionsList,
    onCreate: create,
    onLoad: load,
    onUpdate: update,
  };

  return <HeadContext.Provider value={value}>{children}</HeadContext.Provider>;
};

export { HeadProvider, useHead };
