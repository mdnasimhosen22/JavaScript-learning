const btns = document.querySelectorAll(".favorite-icon");
function handleClick(e) {
  e.target.classList.toggle("filled");
  if (e.target.classList.contains("filled")) {
    e.target.innerHTML = "&#10084";
  } else {
    e.target.innerHTML = "&#9825";
  }
}
btns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
