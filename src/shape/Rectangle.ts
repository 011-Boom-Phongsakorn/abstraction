import { Shape } from "./Shape";
export class Rectangle implements Shape {
  private width: number
  private height: number
  
  constructor(width: number, height: number){
    this.width = width
    this.height = height
  }

  getArea(): number {
    return this.width * this.height
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height)
  }

  draw(): void {
    console.log("Drawing a rectangle...");
  }
}