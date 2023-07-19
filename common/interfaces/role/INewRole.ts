import { IBaseRole } from './IBaseRole';

interface INewRole extends IBaseRole {
    disciplineId?: number;
}

export type { INewRole }