let age = 18;
let text = "you can not vort";
if (age >= 18) {
  console.log("you can vort!");
} else {
  console.log(text);
}

let day;
let date = new Date().getDay();
switch (date) {
  case 0:
    day = "Sunday";
    console.log(day);
    break;
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
    day = "Tuesday";
    console.log(day);
    break;
  case 3:
    day = "Wednesday";
    console.log(day);
    break;
  case 4:
    day = "Thursday";
    console.log(day);
    break;
  case 5:
    day = "Friday";
    console.log(day);
    break;
  case 6:
    day = "Saturday";
    console.log(day);
    break;
  default:
    day = "not fund";
}
