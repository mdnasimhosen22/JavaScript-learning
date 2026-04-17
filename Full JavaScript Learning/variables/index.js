let age; // variable declaretion
age = 45; // value assingment
console.log(age);
age = 56;
console.log(age);

var a = 3; // var global scope
console.log("outsite a  = " + a);
{
  var a = 4;
  console.log("insite a  = " + a);
}
console.log("outsite a  = " + a);
// var e kono block scop nai akhne a insite & outsite dui tai 4 hobe karon block er majhe a variable baire theke access kora jabe

// let er khetre
let x = 3; // let akhon global scope
console.log("outsite x  = " + x);
{
  let x = 4; // let akhon block scope ache
  x = 6; //reassign
  console.log("insite x  = " + x);
}
console.log("outsite  x = " + x);
// let akti block scope variable akhane 2 ta x variable alada block scope majhe je x variable taache ta somporno alada akti variable jodio akoi name hoi.

const y = 3; // let akhon global scope
console.log("outsite y  = " + y);
{
  const y = 4; // let akhon block scope ache
  console.log("insite y  = " + y);
}
console.log("outsite  y = " + y);
