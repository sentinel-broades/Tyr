import { IBaseRole } from './IBaseRole';

interface IRole extends IBaseRole {
  id: number;
  disciplineId: number;
}

export type { IRole }