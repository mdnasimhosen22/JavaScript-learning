// const declaration and value assign ak shathe korte hoi .amara dekhchi let khetre declearation & assing alada vabe kora jai but const ta hoi na

// const x; // ei ta error dibe
// x = "name";
// console.log(x);
// upore moto kora jabe na

const x = "name "; // declear and assing ak shateh korte hobe
console.log("const variable = " + x);

// const er value reassign kora jai na and redeclear kora jai na . const mane constant ja kono  abei change kora jai na.

// const name = " nasim";
// name = "hasan "; // ei ta possibale noi error asbe
// console.log(name);

// abar redeclear kora jai na
// const num = 8;
// const num = 9; // const diye dui akoi variable declear kora jai na syntax error asbe kono vabe possible noi
// console.log("num is =" + num);

// const o block scope let moto

const nam = " hosen";
{
  const nam = "md";
  console.log("insite name is " + nam);
}
{
  const nam = "nasim";
  console.log("insite name is " + nam);
}
console.log("outsite name is " + nam);
// akhane sob gulo nam variable alada alada scope e ache 3 ta variavle vinno jodio akoi name roichhe

//const e hosting hoi but kono value assing kora hoi na. tai temporary red zone error ase but var khetre hosting hoi and akta undefine value set kore dei tai thik motoi kaj kore

name = "nahid";
const name;
console.log("name hosting = " + name);

// ei vabe dile error ase

man = "nahid";
var man; // var use korte thik motoi kaj kore karon ei khane hosting er sathe sathe akta undefine value set hoi .
console.log("name hosting = " + name);
