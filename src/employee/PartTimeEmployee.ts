import { Employee } from "./Employee";

export class PartTimeEmployee extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  public calculateBonus(): number{
    const setSalary = super.getSalary() * 0.05;
    super.setSalary(setSalary);
    return setSalary;
  }
}