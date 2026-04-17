// javascript string bolte bujhai  quotes ("") er majhe koto charenter ba number quote dubble ba singal hote pare

let text = " this is a string";
console.log(text);

// Template Strings hot back tics `` diye je string likha hoi template string single and double dui doren er quote ak shthe alow kore template string majhe varible use kora jai ${} syntax er madhome .template string majhome mathmatics akj o kora jai .

let backtric = `i'm nasim "my pason coding"`;
let name = "Md Nasim ";
let lastName1 = "hosen";
console.log(backtric);
console.log(`My name is ${name}${lastName1}`); // variable name use kora jai back tric ebut quoate er majhe ei sob kora jai na

//javascript string  methods mane js kicu bild in string fun ache je gulo kicu kaj kore

// js length methods length methods er kaj holo string er length koto ta ber kor

let Text = "bimillahir rohmanirohim";
let Length = Text.length; // js String methods
console.log(Length);

//JavaScript String charAt()
// charAt() methods kaj kore jodi kono akti specified index(position) onujai akti character kor te chai akti string theke

{
  let text = "hello wold";
  let char = text.charAt(0); // index position oujai charecter print kora jai
  console.log("char = " + char);
  char = text.charCodeAt(0); // charCodeAt() metods dara charecer ASCII code ber korte pari
  console.log("ASCII code = " + char);
  let code = text.codePointAt(0); // codePointerAt() ei kaj holo string nirdisto index er charecter unicede ber kore dewa
  console.log("index onujai char er unicode = " + code);
  let letter = text.at(1); // kono string theke ba array theke kono charecter index diye ber korete ei ta use hoi . abar nagavite idex use kore array ba string er sesh er man ber korte one use hoi
  console.log("at meth = " + letter);
  console.log("at meth = " + text.at(-1));

  // let con = text[0]; jodi string array moto mone hoi but array na
  // console.log(con);
  // text[0] = "A"; // kono vabei kaj korbe na
  // console.log(text);
}

// js concat
// concat() methods tow or more string ak shathe join kore .jemon dui ta string + oparetor diye jog kori

let fistName = "Md Nasim";
let lastName = "hosen";
let fullName = fistName.concat(" ", lastName);
console.log("concat methods diye amar name join korlam : " + fullName);

//string slice() methods
//The method takes 2 parameters: start position, and end position (end not included).
//slice(start,end)  string er akti ongsho extracts  kore and oi ongsho new string hisebe return kore
{
  let text = "Apple, Banana, Kiwi";
  let part = text.slice(7, 13);
  console.log(part);
}

// string substring()
//substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().mane jodi start hoi nagative valu diye tahole ta 0 dhore nibe
{
  let str = "Apple, Banana, Kiwi";
  let part = str.substring(7, 13);
  console.log("substring = " + part);
}

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

{
  let text1 = "md nasim hosen";
  let text2 = text1.toUpperCase(); // lowerCase k UpperCase kora hoi
  console.log(
    "text1 string methods toUpperCase diye UpperCase kora holo : " + text2,
  );
}

{
  let text1 = "MD NASIm HOSEN";
  let text2 = text1.toLowerCase();
  console.log(
    "text1 string methods toLowerCase diye Lower case  kora holo : " + text2,
  );
}

//String isWellFormed()
// isWellFormed() string methods check kore string ti valid Unicode format ache ki na jodi thake tobe true retrun hobe na hole false hobe
{
  let text = "Hello world!";
  let result = text.isWellFormed();
  console.log("isWellFormed = " + result);
}
{
  // JavaScript internally string store করে 16-bit unit দিয়ে। কিন্তু কিছু character (emoji 😊) store করতে 32-bit লাগে। তাই JavaScript এটা solve করে 2টা part এ split করে।এটাকে বলে Surrogate Pair

  // Surrogate pair = 2টা অংশ:
  // High surrogate  +  Low surrogate

  let text = "Hello World \uD800";
  let result = text.isWellFormed();
  console.log("invalid format = " + result);
}

// js string trim()
// ei trim method text er both sides er whitespace remove kore dei
{
  let text1 = "      Hello World!      "; // whitespace remode from broth side
  let text2 = text1.trim();
  console.log("trim method : " + text2);
}

// JavaScript String trimStart()
// ECMAScript 2019 added the String method trimStart() to JavaScript.

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

let txt = `      "Nasim"   `;
let removeWhiteSape = txt.trimStart(); // start er sob white sape remove
let result = `text lenght is = ${txt.length} \nlength is remove whitesape in front side ${removeWhiteSape.length}`;
console.log(result);
console.log("============");

//String trimEnd()
// trim() er motoi but eti sudhu end site er sape remove kore
let text2 = "    hosen                   ";
let removesapeEnd = text2.trimEnd();
let result2 = `text lenght is = ${text2.length} \nend side sape remove hoiye length holo ${removesapeEnd.length}`;
console.log(result2);

// string repeat() method
//repeat() method akti string k repate kore user issa moto
// repate korar por akta new str return kore but original str change kore na
//syntax
//string.repeat(count)
{
  let text = "Nasim hosen!!";
  let result = text.repeat(2);
  console.log(result);
}
//Replacing String Content
// The replace() method replaces a specified value with another value in a string:

//By defalult replase mathods case sensitive but case insensitive korte hole (/i) regular expression use korte hobe
//Regular expressions are written without quotes.
{
  let text = "most power full country in America !!";
  let newText = text.replace("America", "Bangladesh");
  console.log(newText);
}
{
  let text = "most power full country in AMERICA !!";
  let newText = text.replace(/America/i, "Bangladesh"); // /i regular exprssion use korle case insensitive vabe kaj korbe
  console.log(newText);
}

// string methods replaseAll()
// replase er moto but eti sob gulo match replase kore dei

{
  let text = "Nasim hosen ,nasim web shukhchhe,nasim er laptp ache";
  let text2 = text.replaceAll(/NAsim/gi, "Ami"); // /gi → g = global, i = case-insensitive
  console.log(text2);
}

// split methods diye string k array te convert kora jai

let conuntry = "BNGLADESH";
let ArraySplit = conuntry.split(""); // string k array kore
console.log(ArraySplit);

{
  let text = "Hello world \ud888";
  let result = text.toWellFormed();
  console.log(result);
}
