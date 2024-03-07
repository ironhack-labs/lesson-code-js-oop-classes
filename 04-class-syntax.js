class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

// Instantiate (create) new Car objects
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Toyota", "Corolla");

console.log(car1); // Car {brand: 'Tesla', model: 'Model S'}
console.log(car2); // Car {brand: 'Toyota', model: 'Corolla'}