import { ElectricVehicle } from "./ElectricVehicle";
import { Flyble } from "./Flyble";
import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle implements Flyble, ElectricVehicle{

    constructor(brand:string, engine:string, private speed:number){
        super(brand, engine)
        this.speed = speed
    }

    fly(): string {
        console.log(`${this.brand} บินแล้ว`)
        return super.brand;
    }

    flybleSpeed(amount:number): number {
       return this.speed += amount
    }


    isElectrical(electric:boolean): boolean {
        if(electric === true ){
            console.log(`this motorcycle ${this.brand} is ElectricVehical`)
        }else{
            console.log(`this motorcycle ${this.brand} is not ElectricVehical`)
        }
        return false 
    }
}