interface INewPersonSalary {
    personId: number;
    salary: number;
    startDate: Date;
    endDate?: Date;
    notes?: string;
}

export type { INewPersonSalary }