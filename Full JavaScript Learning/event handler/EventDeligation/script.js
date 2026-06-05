const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  //   console.dir(e);
  if (e.target.matches("li")) {
    if (e.target.innerText === "জাভা") {
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "gray";
    }
  }
});
function addElement() {
  const newElement = document.createElement("li");
  newElement.textContent = "রুবি";
  list.appendChild(newElement);
}
