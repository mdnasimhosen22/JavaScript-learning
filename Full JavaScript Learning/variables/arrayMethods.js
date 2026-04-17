let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let remve = fruits.splice(1, 2, "a", "b"); // 1 theke delete kora start kore eim khane 2 ta delete korbe and oi jaigai "a","b" bosai dite .othar real array modify kore dibe
console.log(fruits);
console.log(remve);

let byck = ["kawasaki", "mt-15", "tvs", "r15", "monoton"];
let replace = byck.splice(1, 0, "nasim");
console.log(byck);
console.log(replace);

// jodi amader main array change cchai kaj korte chai tobe sprad (...) oparator diye copy kore tapor kaj korte hobe
let lang = ["js", "py", "ty", "java"];
let copy = [...lang]; // this copy oiginal array so original array not modifyer
copy.splice(1, 0, "c++", "c#");
console.log(lang);
console.log(copy);

//amar index charaw diret item diye array modify korete pari
let food = ["vat", "mach", "dal", "mangso"];
let indexToRemove = food.indexOf("dal");
if (indexToRemove !== -1) {
  food.splice(indexToRemove, 1);
}
console.log(food);

// cheque value in array to use array methods
{
  let byck = ["kawasaki", "mt-15", "tvs", "r15", "monoton"];
  console.log(byck.includes("kawasaki")); // this mathods asole case sensitive
  console.log(byck.includes("gps demon"));

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(numbers.includes(4, 5));
}
