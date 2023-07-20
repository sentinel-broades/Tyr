import {IBaseHead} from "./IBaseHead";

interface INewHead extends IBaseHead {
    disciplineId?: number;
    roleId?: number;
    squadId: number;
}

export type { INewHead }