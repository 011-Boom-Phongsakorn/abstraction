import { Device } from "./Device";

enum PowerState {
  OFF,
  ON
}

export class Tv implements Device {
  private state: PowerState = PowerState.OFF

  public turnOn(): boolean {
    if(this.state === PowerState.OFF){
      console.log(`TV is now ON`)
      this.state = PowerState.ON
    }
    return this.state === PowerState.ON
  }

  public turnOff(): boolean {
    if(this.state === PowerState.ON){
      console.log(`Tv is now OFF`)
      this.state = PowerState.OFF
    }
    return this.state === PowerState.OFF
  }
}