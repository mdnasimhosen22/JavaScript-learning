//The Element.style property is a read-only property that represents the inline style of an element. You can use this property to get or set the style of an element.
// eti je kono css properties use kore pere  color, background-color, font-size, font-weight and so on.
const para = document.getElementById("para");
para.style.color = "red";

//The Element.classList property is a read-only property that can be used to add, remove, or toggle classes on an element. Let's take a look at a couple of examples.

// classList er madhome ak shathe akdik class add kora jai
//like classList.add("class1", "class2", "class3");

const bodyEl = document.querySelector("body");
bodyEl.classList.add("bodyEl");
para.classList.add("highlight");

// toggle prpperties use
const toggleBtn = document.getElementById("toggle-btn");
const menu = document.getElementById("menu");
toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));

//DOMContentLoaded event eti html sob kicu load kore fire kore dei extranal kicu asar jonno wait kore na
const changeBtn = document.getElementById("changeBtn");
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is loaded.");
});

function changeImg() {
  const img = document.getElementById("example-img");
  img.src =
    "https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg";
  img.alt = "replace img";
  console.log("the img was changed");
}

// changeBtn.addEventListener("click", changeImg);

// dom load hoichhe ki ta test korte pari jodi nicher code ta run kori tobe dekhte pabo agei html load hoye giyechhe than dom load howar por pictur ta change hochhe pictur change howar time aktu thikimiki dekhabe
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", changeImg);
} else {
  console.log("DOMContentLoaded has already fired");
  changeImg();
}
