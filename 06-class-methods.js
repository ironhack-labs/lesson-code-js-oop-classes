class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.year = 2024;
  }

  // Add a method to the class
  getCarInfo() {
    return `Car: ${this.brand} ${this.model} (${this.year})`;
  }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Toyota", "Corolla");
const car3 = new Car("Ford", "Focus");


console.log(car1.getCarInfo()); //  Car: Tesla Model S (2024)
console.log(car2.getCarInfo()); //  Car: Toyota Corolla (2024)
console.log(car3.getCarInfo()); //  Car: Ford Focus (2024)