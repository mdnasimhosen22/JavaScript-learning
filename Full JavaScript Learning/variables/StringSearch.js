// indexOf() methids return kore akti string er moddhthe thaka string frist string
let text = "Plase tall me about your self! also tall about your family!";
let index = text.indexOf("tall"); // indexOf kono string er string fisrt char er index ber kore and jodi oi string na thake tobe -1 print kore
console.log("the index possition is tall it's frist position= " + index);

// lastIndexOf() eta o index return kore specifix text string er last ta print kore
//etao indexOf er moto same string majhe na thakle -1 return korbe
{
  let text = "Plase tall me about your self! also tall about your family!";
  let index = text.lastIndexOf("tall"); // lastIndexOf string mahe ta oi string er last ta print kore
  console.log("the index possition is tall it's last position = " + index);
}

//Both methods accept a second parameter as the starting position for the search:
let about = " hi iam nasim . nasim may name";
let towParamiter = about.indexOf("nasim"); // index second paramiter e fromIndex dewa jai or that se kothai theke search start korbe
console.log(towParamiter);

// search() methods string er mojhe string serch kore jodi match hoi tobe string er postion retrun korbe

const txt = "Pl locate where 'locate' occurs!";
console.log(txt.search(/locate/));

// match() methods string majhe  RegEx (Regular Expression) diye khuje ja mil pai ta array hisebe return kore frist lavel and goble search kore jai
// number , special charecter, email validetion,text,macth kora ba khuje ber korte use hoi
// match na korle null return kore
{
  let text = "The rain in SPAIN 5 stays mainly 5 in 0 86347  the plain";
  let res = text.match(/[0-9]/g);
  console.log(res);
  let res1 = text.match("ain");
  console.log(res1);
  let res2 = text.match(/text/g);
  console.log(res2);
  let res3 = text.match(/spain/gi); //case insensitive vabe kaj kore
  console.log(res3);
}

// matchAll() methods majhe thaka akti string match hole tar akti iterator return kore
// prgramin e iterator holo akti calection er list mane koi bar mil ache atr aki list

{
  let text = "ei bro how aree you, bro what's your name.bro whare are from";
  const iterator = [...text.matchAll(/bro/g)];
  console.log(iterator);
}

// includes() methods string majhe jodi  specified value ta thake tobe true return kore otherwise false return korbe
//includes () [position set kore dewa jai kotha theke khuja strat korbe]
// includes() case sensitive
{
  let text = "Hello world, welcome to the universe.";
  let res = text.includes("world");
  console.log(res);
  let res1 = text.includes("world", 12);
  console.log(res1);
}

//startsWith() jodi kono string akti specified vale diye strat hoi tobe true return korbe otherwise false return korbe
//kon position theke search strat kore ta bole dewa jai
// ei methods case sensitive

{
  let text = "hello world! i am learning javascript.";
  let StratWith = text.startsWith("hello");
  console.log(StratWith);
}
