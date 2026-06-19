const container = document.getElementById("container");
container.innerHTML = "<div> <p > hello world </p> </div>";
const targetPara = document.querySelector("div");
// targetPara.id = "show-btn";                      dynamic vabe id create kora
const button = document.createElement("button");
button.innerText = "show button";
targetPara.append(button);
console.log(container);
const img = document.createElement("img"); // new eleamnet create
img.src = "https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg";
img.alt = "photo not found";
container.appendChild(img);

// console.log(container.textContent);
