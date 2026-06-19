const bodyEl = document.querySelector("body");
const btn = document.getElementById("btn");
const para = document.getElementById("para");

let isBgColor = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor = isBgColor ? "blue" : "gray";
  isBgColor = !isBgColor;
}

// removeEventlistener holo are je vent add kora hoichhe oi ta remove korar jonno use hoi.
// addEventListener moto ei ta o 2 ta argument nei eita aro akta third argument hisebe options or useCapture nei
// 1. useCapture -> eti akti boolen man | eti bujhar age amader Event Propagation ki vabe kaj kore ei ta jante hobe . Event Propagation 2 vabe kaj kore 1. Capturing Phase: parent theke child er dike event fire hoi mane upor theke nicher dike 2.Bubbling Phase: child thke parent er dike mane nich theke uporemn dike,    jodi addElventListener ei ta true thake jobe remove listner o captur true dite hobe  an hole kaj korbe na
// synax : removeEventListener("event", listener, true);
// 2 .options -> eti akti object adhunic js true/false er bodore akta object pass kora jar modhe 2 ta option theke 1. once mane ei event ta akbar chole automatic vabe browser remove kore dibe ete kore r removeEventListener listener add korte hoi na
// second option holo passive eti miloto parfomance er jonno use hoi | like mobail device  jokhon user screen scroll kore (touchstart বা touchmove) tokhon browser scroll korar age opekhha kore je developer event.preventDefault() diye scroll atke dibe ki na | r jodi passive:true dewa thake tobe browser r opekhha korbe na se bujhbe browser atkabe na

// captur or options addEventListener dewa thake tobe remove korar time oio tai dite hobe na hole kaj korbe na

btn.addEventListener("click", toggleBgColor);
// button theke lisener remove m=kora hoichhe

para.addEventListener("mouseenter", () => {
  btn.removeEventListener("click", toggleBgColor);
  ("click", toggleBgColor);
  console.log("remove kora hoiche");
});
