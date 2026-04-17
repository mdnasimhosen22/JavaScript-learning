//assingment oparetor
const number1 = 9;
console.log("this a number = " + number1);

//Compound Assignment Operators
let num = 5;
num += 5;
console.log(num);

let Str = "nasim";
Str += " kana";
console.log(Str);

let num2 = 90;
num2 -= 50;
console.log(num2);

let num3 = 2;
num3 **= 4;
console.log(num3);

let num4 = 10;
num4 %= 7; //num4 = num4 % 7;

console.log(num4);

const x = 8,
  y = 5,
  z = 5;
const m = x + y + z;
console.log(x, y, z);
console.log(m);

let n, t, r;
n = 4;
t = 5;
r = 6;
((n *= 4), (t += 1), (r /= 6));
console.log(n, t, r);
//comparison oparetor
let equal = "5"; // auto convet in number
let res = equal == 5;
console.log(res); // out is true

let e = "6"; // string type
let re = e === 6; // checking value and type
console.log(re); // out is a false

let car1 = "a"; //
let car2 = "z";
let res1 = car1 > car2;
console.log("ans = " + res1);

// arithmatic oparetor

let number = 5;
let power = number ** 2;
console.log(power);

let o = 4;
let p = Math.pow(o, 2); // js mehtods it's like power oparetor
console.log(p);

//comparison oparetor
let age = 19;
if (age > 18) {
  console.log("your are Adel person ");
} else {
  console.log("you are young person");
}

// String comparesion
let a = "a"; // a er unicode holo 97
let b = "b"; // b er unicode 98
let c = a > b; // akhane string compare kora unicode value dara unicode holo ASCII
console.log(c); // flase

// js character er unicode ber korar jonno mathod holo charCodeAt() ei mathod diye sohojei  jeno character unicode ber korte pari
console.log("a".charCodeAt(0)); // 97
console.log("b".charCodeAt(0)); // 98
console.log(Number);
console.log(isNaN);
