function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
    }
}

function Employee(name, age, designation) {
    Person.call(this, name, age); //Call Person to initialise name and age
    this.designation = designation;
    this.getDetails = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Desgination: ${this.designation}`);
    };
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee;

const employee1 = new Employee("Lambit", 22, "Web Developer");
employee1.sayHello(); //Hello, I am Lambit and I am 22 years old
employee1.getDetails(); //Name: Lambit, Age: 22, Designation: Web Developer