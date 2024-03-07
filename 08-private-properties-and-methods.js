class Car {
  // Create a private property
  #owner;

  constructor(brand, model, owner) {
    this.brand = brand;
    this.model = model;
    Car.numberOfCars++;
    // Initialize the private property with a value
    this.#owner = owner;
  }

  getCarInfo() {
    return `Car: ${this.brand} ${this.model} (${this.year})`;
  }

  // Create a private method
  #getVIN() {
    return Math.random().toString(36).substr(2, 10).toUpperCase();
    // VIN - Vehicle Identification Number
  }

  // Private properties and methods are accessible only within the class
  getCarData() {
    return `Owner: ${this.#owner}, VIN: ${this.#getVIN()}`;
  }


}

const car5 = new Car("Ford", "Focus", "John Doe");
console.log(car5.getCarData()); // Owner: John Doe, VIN: ...

// Trying to access the private properties and methods from outside the class
console.log(car5.#owner); // SyntaxError
console.log(car5.#getVIN()); // SyntaxError