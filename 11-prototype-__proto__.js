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



// The prototype of the 'Student' class 
// points to the prototype of the 'Person' class:
console.log(Student.prototype.__proto__ === Person.prototype); // true
