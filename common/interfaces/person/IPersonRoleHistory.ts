interface IPersonRoleHistory {
    id: number;
    startDate: Date;
    endDate?: Date;
    roleName: string;
}

export type { IPersonRoleHistory }