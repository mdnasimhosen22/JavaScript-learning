const rect = document.getElementById("rect");
let positon = 0;
function update() {
  rect.style.left = positon + "px";
  positon += 2;
  if (positon > window.innerWidth) {
    positon = -rect.offsetWidth;
  }
}
function animate() {
  update();
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

//
const square = document.querySelector("#square");

const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(100px)" }],
  {
    duration: 2000, // makes animation lasts 2 seconds
    iterations: Infinity, // loops indefinitely
    direction: "alternate", // moves back and forth
    easing: "ease-in-out", // smooth easing
  },
);
