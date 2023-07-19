import {IBaseHead} from "./IBaseHead";

interface IHead extends IBaseHead {
    id: number;
    roleId: number;
    roleName: string;
    squadId: number;
}

export type  { IHead }