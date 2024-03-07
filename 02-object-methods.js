const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
  startEngine: function() {    // 'function' keyword syntax
    return "Engine started!";
  },
  stopEngine () {               // shorthand syntax
    return "Engine stopped!";
  },
  honk: () => {                // arrow function syntax
    return "Beep! Beep!";
  }
};

console.log(car.startEngine()); // Engine started!
console.log(car.stopEngine()); // Engine stopped!
console.log(car.honk()); // Beep! Beep!