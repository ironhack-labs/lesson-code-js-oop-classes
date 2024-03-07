class Car {
  #owner;

  constructor(brand, model, owner) {
    this.brand = brand;
    this.model = model;
    Car.numberOfCars++;
    this.#owner = owner;
  }

  getCarInfo() {
    return `Car: ${this.brand} ${this.model} (${this.year})`;
  }

  #getVIN() {
    return Math.random().toString(36).substr(2, 10).toUpperCase();
  }

  getCarData() {
    return `Owner: ${this.#owner}, VIN: ${this.#getVIN()}`;
  }
}


// Create a new class that extends the Car class

class ElectricCar extends Car {
  constructor(brand, model, owner, batteryKWh) {
    // Call the parent class constructor
    super(brand, model, owner);
    // Add a new property
    this.batteryKWh = batteryKWh;
  }

  getCarInfo() {
    return `Electric Car: ${this.brand} ${this.model} (${this.year})`;
  }

  getBatteryInfo() {
    return `Battery capacity: ${this.batteryKWh} kWh`;
  }
}

// Create a new instance of the ElectricCar class
const electricCar1 = new ElectricCar("BMW", "i4", "Jane Doe", 60);

// Call the method from the class 'ElectricCar'
console.log(electricCar1.getCarInfo()); // Electric Car: BMW i4 (2024)
console.log(electricCar1.getBatteryInfo()); // Battery capacity: 60 kWh

// Call the methods inherited from the class 'Car'
console.log(electricCar1.getCarData()); // Owner: Jane Doe, VIN: 7C7162IKMU