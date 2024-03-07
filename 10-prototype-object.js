class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }

}

// Methods defined in the class are automatically added to its '.prototype' object
console.log(Person.prototype); // { greet: ƒ }

// Create a new instance of the 'Person' class
const person1 = new Person("John", 25);


// The '__proto__' property of the instance points to the prototype of the class
console.log(person1.__proto__); // { greet: ƒ }
console.log(person1.__proto__ === Person.prototype); // true