function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
    }
}
// Example
const person1 = new Person('Lambit', 22);
person1.sayHello();