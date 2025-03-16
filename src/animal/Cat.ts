import { Animal } from "./Animal";

export class Cat extends Animal {
  
  public makeSound(): string {
    const catSounds = ["เหมียว~", "เมี๊ยววว~", "แง้ว!"]
    return `${catSounds[Math.floor(Math.random() * catSounds.length)]}`
  }
}