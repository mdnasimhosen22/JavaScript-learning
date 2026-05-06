const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    nest: {
      cls: "5th",
      lang: "proging",
    },
  },
};

function isObject(obj) {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
}

function printV(obj) {
  for (const key in obj) {
    if (isObject(obj[key])) {
      printV(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}
printV(person);
