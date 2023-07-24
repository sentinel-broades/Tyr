interface IPersonSalaryHistory {
  id: number;
  startDate: Date;
  endDate?: Date;
  salary: number;
  notes?: string;
}

export type { IPersonSalaryHistory };
