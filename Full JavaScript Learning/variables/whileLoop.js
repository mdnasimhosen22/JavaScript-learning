//while loop holo kono condition joto khon true thabe to somoy ei loop ta cholbe
// jodi condition false hoi tobe loop kono vabei excute hobe na

{
  let i = 0;
  while (i <= 10) {
    console.log("The number 10 is lase then or equal = " + i);
    i++; // jodi kono korone ei increment ba decrement korte miss hoi tobe code infinite loop hoye jabe
  }
}

// do while loop
// while and do while main difference while loop condition false tobe loop excute e hobe na but do while loop jodi condtion false o hoi tai loop ak bar cholbe
// do while loop kaj ta age thake mane loop ta ki korbe ta age defile kora thake and condition ta pore thake

let text = "";
let i = 0;
do {
  text += "The number is " + i + "\n";
  i++;
} while (i <= 5);
console.log(text);
