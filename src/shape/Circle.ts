import { Shape } from "./Shape";

export class Circle implements Shape {
  private radius: number;

  constructor(radius: number){
    this.radius = radius
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  draw(): void {
    console.log("Drawing a circle...");
  }
}