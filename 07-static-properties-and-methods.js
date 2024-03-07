class Car {
  // Create a static property
  static numberOfCars = 0;

  // Create a static method
  static getNumberOfCars() {
    // Access the static property directly on the class
    return Car.numberOfCars;
  }

  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.year = 2024;
    Car.numberOfCars++; // Increment the number of cars
  }
  
  getCarInfo() {
    return `Car: ${this.brand} ${this.model} (${this.year})`;
  }
}


/* Using the keyword statis is equivalent to
 adding the properties and methods directly to the class:
*/
//
// Car.numberOfCars = 0;
//
// Car.getNumberOfCars = function() {
//   return Car.numberOfCars;
// };
