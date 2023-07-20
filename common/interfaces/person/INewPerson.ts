import {IBasePerson} from "./IBasePerson";

interface INewPerson extends IBasePerson {
    roleId?: number;
}

export type { INewPerson };
