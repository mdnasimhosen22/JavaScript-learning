const parenDiv = document.getElementById("parent");
const from = document.getElementById("from");
const Button = document.getElementById("Button");

parenDiv.addEventListener("click", lisenar);
// event capturing or trickling
from.addEventListener("click", lisenar, {
  capture: true,
});
Button.addEventListener("click", lisenar);

// Event Bubbleing holo taget button theke cromannoi parent er dike jawa kei bole Event Bubbleing
// event bubbling holo defualt
function lisenar(event) {
  //   console.log(event.target);
  //   console.log(event.currentTarget);
  //   console.log(this.currentTarget);
  //   console.log(this.tagName);
  console.log(this.tagName);
}
