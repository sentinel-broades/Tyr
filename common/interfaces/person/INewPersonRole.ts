interface INewPersonRole {
    personId: number;
    roleId?: number;
    startDate: Date;
    endDate?: Date;
    notes?: string;
}

export type { INewPersonRole }