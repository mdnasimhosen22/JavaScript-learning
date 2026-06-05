const fruits = ["apple", "banana"];

const language1 = {
  name: "JavaScript",
  year: 1995,
  creator: "Brendan Eich",
};

// spread  oparator ak array ba obojet r frist laver er elemet gulo deep copy kore
// deep copy korar karone memory refarence o vinno hoi .
const newFruits = [...fruits];
newFruits.push("mango");
console.log(newFruits);
console.log(fruits);

const newObj = { ...language1 };
console.log(newObj);

// rest oparator holo jokhon kono functio akta dhik valu diye dei ja ami na tokhon rest oparator babohar kore akta array te covert kore kaj korte pari

function sum(...rest) {
  return rest.reduce((total, currValue) => total + currValue, 0);
}
console.log(sum(2, 3, 4, 5, 7, 4));
