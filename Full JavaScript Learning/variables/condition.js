// if
// else if
// else
// switch case
//ternary oparetor

//if conditon jodi akti single valu chahe korte hoi tobe if use hoi jodi condition truthy hoi tobe kajnkore na hole kicui kore na

let name = "nasim";
if (name == "nasim") {
  // condition ta true
  console.log("hi Iam Nasim");
}

//else if jodi akadhik condition check korte hoi tobe else if condition use koi te hoi .akhane jodi frist condition ta false hoi tobe second else if condition check kore .e vabei ati kaj kore

let age = 17;
if (age > 18) {
  console.log("young");
} else if (age == 18) {
  console.log("porer year vote hobe");
} else {
  console.log("vote hote time lagbe");
}

// else condition jodi hoi eta n ahoi oi ta  choose/ select korbo ta hole else use hoi

let nam = "nasim";
if (nam == "noyon") {
  console.log("Hei ami nasim");
} else {
  console.log("Sorry tumi jake khujcho j]seta ami na");
}

//switch case jodi ami variable ei ba aki single condition er upor nivor kore jodi onek gulo kaj korte hoi tobe tokhon ternari oparetor ues korte hoi

let day = 1;
switch (day) {
  case 1:
    console.log("Satarday");
    break; // switch case khetre break key word ta mast dite hobe na hole case jeta te macth hoichhe oi ta theke case sesh howa porjonto sob gulo case execute hobe ei problem ke bole Fall through
  case 2:
    console.log("sunday");
    break;
  case 3:
    console.log("monday");
    break;
  default:
    console.log("invalid day ");
}
// ternari oparetor
//TERNARY oparetor if else er kati short version syntax (condition) ? expression1 : expression2
let car = "BMW";
let like = car == "BMW" ? " ami nibo" : "ami nibo na";
console.log("ami ki korbo  = " + like);

let era = 18;
let text = era < 18 ? "minor" : "adult";
console.log("show the text = " + text);

//boolean oparetor

let bol = 3;
let res = bol == 4;
console.log(res);
console.log(Boolean(30 < 40)); //boolean function e khane value cheak korte konta boro choto

//logical oparetor

// javaScrip nullish oparator holo(??) Nullish Coalescing Operator
//nullish holo 2 ta value dekhe null and undefined jodi nullish oparetor er pore ei 2 ta value thake tobe defaultValue valu bolaw mane dan diker value bolsbe r ta na hole ja ache tai thakbe
//  || and ?? er majhe parthokko
//  || oparetor falsi sob vabe ke nei but ?? opare tor sudhu null and undefined vlaue dui dai nei  ei tai main defarents

// যদি value = null বা undefined হয় → defaultValue use হবে অন্যথায় → value use হবে

let Name = null;
let txt = "Nasim";
let result = Name ?? txt;
console.log(result);
