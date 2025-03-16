import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

const rectangle = new Rectangle(10, 10);
console.log(rectangle.getArea())
console.log(rectangle.getPerimeter())

const circle = new Circle(10);
console.log(circle.getArea())
console.log(circle.getPerimeter())
