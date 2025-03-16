import { FullTimeEmployee } from "./FullTimeEmployee"
import { PartTimeEmployee } from "./PartTimeEmployee"


const fullTimeEmployee = new FullTimeEmployee('Jane', 10000)
console.log(`${fullTimeEmployee.calculateBonus()} โบนัส 10% ของเงินเดือน`) // 1000
console.log(fullTimeEmployee.getSalary())

console.log('#################################################')

const partTimeEmployee = new PartTimeEmployee('John', 5000)
console.log(`${partTimeEmployee.calculateBonus()} โบนัส 5% ของเงินเดือน`) // 250
console.log(partTimeEmployee.getSalary())