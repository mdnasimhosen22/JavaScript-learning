// for loop
{
  let text = "";

  for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "\n";
  }
  console.log(text);
}

//for loop er majhe 3 ta exp thake
//exp 1 : variable er man inialize kore dewa hoi like :(let i = 0;). ei ta loop er majhe ptional jidi age thekei variable er man set kora thake tobe loop er majhe r likhte hoi na .
//exp 2 : ei exp er kaj kore loop ta kon sorter upor kaj korbe exp2 e je condition thake tar upor vitti kore puro loop ta lobe eta o optional like :(i < 10).
//exp 3 : variable  er man icrement or decrement kore etao optional jodi exp 3 loop er moddhe na likhi tobe loop er body vitore manualy control korte hobe

// for loop e exp 1 age theki delliar thakle

{
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  let len = cars.length;
  let i = 1;
  let text = "";
  for (; i < len; i++) {
    text += "Car Name is a " + cars[i] + "\n";
  }
  console.log(text);
}
// exp 2 loop er vitor theke controll kora jai

{
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  let len = cars.length;
  for (let i = 0; ; i++) {
    if (i >= len) break;
    console.log("car =========== " + cars[i]);
  }
}

//exp 3 baire rakhe
for (let i = 1; i <= 5; ) {
  console.log(i);
  i++; // manually update
}

{
  let text = "";
  let i = 0;
  while (i < 10) {
    text += "The number is " + i + "\n";
    i++;
  }
  console.log(text);
}
