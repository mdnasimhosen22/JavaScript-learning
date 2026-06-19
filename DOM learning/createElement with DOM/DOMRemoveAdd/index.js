const dessertsList = document.getElementById("desserts");

const listItem = document.createElement("li");
listItem.textContent = "cookies";
dessertsList.appendChild(listItem);
console.log(dessertsList);

// remove item to dom
const sectionEl = document.getElementById("example-section");
const lastPara = document.querySelector("#example-section p:last-of-type");
sectionEl.removeChild(lastPara);
console.log(sectionEl);
console.dir(navigator);
console.log(navigator.userAgent);
console.log(navigator.geolocation);

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location);
