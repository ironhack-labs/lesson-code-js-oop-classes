class Car {
  constructor(brand, model) {
    // Properties initialized with the values passed to the class
    this.brand = brand;
    this.model = model;
    // Property initialized with a default value
    this.year = 2024;
  }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Toyota", "Corolla");


// The arguments must be passed in the same order as defined in the constructor
// new Car(<brand>, <model>)
const car3 = new Car("Ford", "Focus");

console.log(car3); // Car {brand: 'Ford', model: 'Focus', year: 2024}


// The ommited arguments will be 'undefined'
const car4 = new Car("Honda");
console.log(car4); // Car {brand: 'Honda', model: undefined, year: 2024}