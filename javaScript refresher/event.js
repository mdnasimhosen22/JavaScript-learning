const button = document.getElementById("button");

function Sayhello() {
  console.log("event clicked");
}
button.addEventListener("click", Sayhello);
