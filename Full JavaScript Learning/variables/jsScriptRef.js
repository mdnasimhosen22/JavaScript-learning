function myFun() {
  console.log("hello fuction");
  console.log("hi siam");
}
myFun();

let charecter = "chareter";
let esult = charecter.at();
console.log(esult);

// string constructor
let message = "Hello World!";
let text = message.constructor;
let re = new text(message);
console.log(re);

// endWith() methods are retrun true if a string ends with a specifed string
// otherwise it return false.this methods case sensitive.

let Strtext = " hello nasim";
let result = Strtext.endsWith("nasim");
console.log("endsWith = ", result);

// startsWith() methods are retrun true if a string starts with a specifed string
// otherwise it return false.this methods case sensitive.

{
  let Strtext = "hello nasim";
  let result = Strtext.startsWith("hello");
  console.log("endsWith = ", result);
}

// fromCharCode() methods unicode values k characters e convert kore

let unicode = 70;
let unicode1 = 70;
let char = String.fromCharCode(unicode, unicode1);
console.log(char);

//includes() methods returns true if a string contains a specifed string otherwise returns false .this methods is case sensitive

let inText = "Hello world, welcome to the universe.";
let inResult = inText.includes("welcome");
console.log("inResult = ", inResult);

//indexOf() মেথডটি একটি স্ট্রিং-এর মধ্যে নির্দিষ্ট কোনো ক্যারেক্টার বা সাবস্ট্রিং-এর প্রথম উপস্থিতির অবস্থান (index বা অবস্থান নম্বর) নির্দেশ করে । যদি মানটি খুঁজে পাওয়া না যায়, তবে এটি সাধারণত -১ () রিটার্ন করে। এটি ০ থেকে গণনা শুরু করে

let indText = "Hello word ! i am is here  ";
let indResult = indText.indexOf("w");
console.log("indResult = ", indResult);

//JavaScript String lastIndexOf() return kore akti sentence er majhe amara je string ta khujchhi tar last string ta .mane jodi 2 ta thake tobe 2nd tar index number dibe
let lastindText = "Hello world ! i am is here world is so cute ";
let lastindResult = lastindText.lastIndexOf("world");
console.log("lastindResult = ", lastindResult);

//The length property returns the length of a string.
let lengthText = "Hello world ! i am is here world is so cute ";
let lengthResult = lengthText.length;
console.log("lengthResult = ", lengthResult);

// padEnd() methods string er end anather string diye khali jaiga pupon kore
// padEnd() akta string methods ati number k fisrt string e convert kore .
let numb = 5;
let Padtext = numb.toString();
let padded = Padtext.padEnd(4, "0");
console.log(typeof padded);
