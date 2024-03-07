const person = {
  name: "Joshua",       // string
  age: 25,              // number
  isIronhacker: true,   // boolean
  karaokeSkills: null,  // null
  location: undefined,  // undefined
  contactInfo: {        // object
    email: "josh@example.com",
    phone: "(505) 842-5662"
  },
  hobbies: ["surfing", "coding"] // array
};



// Object with properties named using numbers
const wifiSignal = {
  0: "No signal",
  1: "Weak",
  2: "Fair",
  3: "Good",
};

console.log(wifiSignal);



// Object with properties named using strings and [] dynamic property names
const str = "3 + 3";
const num = 10;

const calculations = {
  "1 + 1": 2,
  '2 + 2': 4,
  [str]: 6,
  [num]: 10,
  [undefined]: undefined
};

console.log(calculations);