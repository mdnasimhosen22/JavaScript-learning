// find () array er  protita item er upor loop chai and condition er shathe je item ta mil pai ta return kore akta dik item mil thakle frist ta return kore

const fruits = ["Banana", "mango", "orange", "Apple", "lemon"];
const result = fruits.find((f) => f === "Banana");
console.log(result);
// findIndex () oi item er index return kore baki proce find er motoi
const fruits1 = ["Banana", "mango", "orange", "Apple", "lemon"];
const result1 = fruits1.findIndex((f) => f === "Banana");
console.log(result1);

//filter () amar main array er upor filter kore akta new array return kore je condition ta dibo oi condition er upor vitti kore akta new array eturn kore

const fruits2 = ["Banana", "mango", "orange", "Apple", "lemon"];
const filter = fruits2.filter((f) => f === "Banana" || f === "lemon");
console.log(filter);
console.log(fruits2);

// slice () akta array er cut kore fela
// syntaxt array.slice(strat,end)
// main arr kono chnage kore na cut kora onso niye akta new array retrun kore

const fruits3 = ["Banana", "mango", "orange", "Apple", "lemon"];
const slice = fruits2.slice(1, 3);
console.log(slice);
console.log(fruits3);

//splice () array majh theke item delete kore oi jagai new item add korte pare ei main array kew modify korte pare
// syntax array.splice(strat,removeitemCount,addItem)
const fruits4 = ["Banana", "mango", "orange", "Apple", "lemon"];
const splice = fruits4.splice(2, 2, "painaple", "stobary", "dragon");
console.log(splice);
console.log(fruits4);

// concat () methods array last e item add kore dei
// eta main array change kore na
const fruits5 = ["Banana", "mango", "orange", "Apple", "lemon"];
const concat = fruits5.concat(["painaple", "stobary", "dragon"]);
console.log(concat);
console.log(fruits5);

// push () methods ei taw concat er motoi kaj kore but ei ta main array k change kore fale
// and array new langth retrun kore

const fruits6 = ["Banana", "mango", "orange", "Apple", "lemon"];
const push = fruits6.push("painaple");
console.log(push);
console.log(fruits6);

// map() methods array ke modifile kore new array te conver korte pare
// map () sob array k loop kore kore jai akhon

const fruits7 = ["Banana", "mango", "orange", "Apple", "lemon"];
const map = fruits7.map((f) => {
  if (f === "Apple") {
    return "nasim";
  } else {
    return "N/A";
  }
});
console.log(map);
console.log(fruits7);

// reduce () methods amader jodi akta array akta single value te niye aste chai tobe ei methods use korte pari

const numbers = [1, 2, 3, 4, 5, 6];
const reduce = numbers.reduce((total, currValue) => total + currValue, 0);
console.log(reduce);

// for .. of loop er madhome amar array ba string er protita item k print korte pari
// array khetrei eita use kora jai
const numbers1 = [1, 2, 3, 4, 5, 6];
for (num of numbers1) {
  console.log(num);
}

const string = "nasim";
for (c of string) {
  console.log(c);
}

//object er khtre use hoi for ... in looop
// for in loop diye object er protita key k acess korte pari
const language = {
  name: "javascript",
  year: 1995,
  creator: "Brendan Eich",
};
for (key in language) {
  console.log(language[key]);
}
