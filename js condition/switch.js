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

let din = new Date().getDay();

switch (din) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    console.log(text);
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    console.log(text);
    break;
  default:
    text = "Looking forward to the Weekend";
}
