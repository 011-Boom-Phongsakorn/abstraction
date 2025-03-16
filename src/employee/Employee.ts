export abstract class Employee {
  private name: string;
  private salary: number;
  
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public getSalary(): number {
    return this.salary;
  }

  public setSalary(salary: number): void {
    this.salary += salary;
  }

  abstract calculateBonus(): number;

}