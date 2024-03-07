class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}



class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  study() {
    return `${this.name} is studying`;
  }
}


// Create a new object instance
const student1 = new Student("Alice", 28, "Web Development");


// Call the method inherited from the 'Person.prototype'
console.log(student1.greet()); // 


// Call the method inherited from the 'Student.prototype'
console.log(student1.study());


// The Student instance '__proto__' points to the 'Student.prototype'
console.log(student1.__proto__ === Student.prototype); // true


// The prototype of the 'Student' class 
// inherits from the prototype of the 'Person' class:
console.log(Student.prototype.__proto__ === Person.prototype); // true


// The prototype of the 'Person' class 
// inherits from the prototype of the 'Object' class:
console.log(Person.prototype.__proto__ === Object.prototype); // true
