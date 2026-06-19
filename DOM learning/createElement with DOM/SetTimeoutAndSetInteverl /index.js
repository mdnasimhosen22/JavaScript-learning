//
const timeOut = setTimeout(function () {
  console.log("This runs after 3 seconds");
}, 3000);
console.log(timeOut);

const Interval = setInterval(() => {
  console.log("code run 2 second ----");
}, 2000);
console.log(Interval);

setTimeout(() => {
  clearInterval(Interval);
}, 8000);
