import { IHeadPerson, INewHeadPerson } from 'tyr-common';
import { createContext, useContext, useState } from 'react';
import { apiGet, apiPost } from '../../api';

interface HeadPersonProps {
  HeadPersonState?: {
    headPersonList: IHeadPerson[] | null;
  };
  onList?: (squadId: number) => Promise<IHeadPerson[]>;
  onCreate?: (headPerson: INewHeadPerson) => Promise<number>;
}

const HeadPersonContext = createContext<HeadPersonProps>({});

const useHeadPerson = () => {
  return useContext(HeadPersonContext);
};

const HeadPersonProvider = ({ children }: any) => {
  const [headPersonState, setHeadPersonState] = useState<{
    headPersonList: IHeadPerson[] | null;
  }>({
    headPersonList: null,
  });

  const list = async (squadId: number) => {
    return apiGet(`/head/person/${squadId}`).then((res) => {
      setHeadPersonState({ ...headPersonState, headPersonList: res });
      return res;
    });
  };

  const create = async (headPerson: INewHeadPerson): Promise<number> => {
    return await apiPost(`/head/person`, headPerson);
  };

  const value = {
    HeadPersonState: headPersonState,
    onList: list,
    onCreate: create,
  };

  return (
    <HeadPersonContext.Provider value={value}>
      {children}
    </HeadPersonContext.Provider>
  );
};

export { HeadPersonProvider, useHeadPerson };
