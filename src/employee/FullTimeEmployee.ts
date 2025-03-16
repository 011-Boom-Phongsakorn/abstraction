import { Employee } from "./Employee";

export class FullTimeEmployee extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    public calculateBonus(): number {
      const setSalary = super.getSalary() * 0.10;
      super.setSalary(setSalary)
      return setSalary;
    }

}