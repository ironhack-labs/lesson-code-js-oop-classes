const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
  startEngine: function() {
    return `${this.brand} ${this.model} engine started!`;
  },
  stopEngine () {
    return `${this.brand} ${this.model} engine stopped!`;
  },
  honk: () => {
    return "Beep! Beep!";
  }
};

console.log(car.startEngine()); // Toyota Corolla engine started!
console.log(car.stopEngine()); // Toyota Corolla engine stopped!
console.log(car.honk()); // Beep! Beep!