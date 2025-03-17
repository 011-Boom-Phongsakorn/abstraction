import { Device } from "./Device";

export class Radio implements Device {
  private isOn: boolean = false

  public get status(): string{
    return this.isOn ? 'ON' : 'OFF'
  }

  public set status(value: 'ON' | 'OFF'){
    if(value === 'ON'){
      this.turnOn()
    }else{
      this.turnOff()
    }
  }

  public turnOn(): boolean {
    if(!this.isOn){
      console.log(`Radio is now ON`)
      this.isOn = true
    }
    return this.isOn
  }

  public turnOff(): boolean {
    if(this.isOn){
      console.log(`Radio is now OFF`)
      this.isOn = false
    }
    return this.isOn
  }
}