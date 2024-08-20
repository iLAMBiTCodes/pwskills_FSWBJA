/**
 * Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
the draw method. Demonstrate polymorphism using instances of these classes.
 */
class Shape{
    draw() {
        console.log("Drawing a Shape");
    }
}
class Circle extends Shape {
    draw() {
        console.log("Drawing a Circle");
    }
}
class Rectangle extends Shape {
    draw() {
        console.log("Drawing a Rectangle");
    }
}

const shape1 = new Shape();
const circle1 = new Circle();
const rectangle1 = new Rectangle();

// Polymorphism demonstration
[shape1, circle1, rectangle1].forEach(shape => {
    shape.draw();
})
/**
Drawing a Shape
Drawing a Circle
Drawing a Rectangle
 */