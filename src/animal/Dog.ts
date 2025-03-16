import { Animal } from "./Animal";

export class Dog extends Animal {

  public makeSound(): string {
    const dogSounds = ["โฮ่ง โฮ่ง!", "งี้ด งี้ด~", "หงิงๆ", "กรรรร~", "โฮ่วววว~"]
    return `${dogSounds[Math.floor(Math.random() * dogSounds.length)]}`
  }
}