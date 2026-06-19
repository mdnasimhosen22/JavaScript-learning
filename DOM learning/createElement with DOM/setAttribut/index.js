// setAttribute() methods holo javaScript er akta DOM methods ei ta diye akta html je kono element er attribute change korte pari

const para = document.getElementById("para");
// syantx : setAttribute(attribute, value)
para.setAttribute("class", "my-class");
para.setAttribute("class", "nnn");
console.log(para);
console.log(`${para.outerHTML}`);
console.dir(Event);

//addEventListener() methods holo amon akti DOM ja jekono event listen korte pare.
// user jokhon kono button e click kore kono kicu change korar try kore oi tai holo event.event man kono ghotona ghota bujhai.
//addEventListener() methods 2 ta argument nei 1. "event", ki dhoroner (type nirdisto kore dei) event sunte hobe oi ta nei frist aurgument e 2. argument e nei akata listener function event ta ghotle ki hobe ta ei khane likhe dite hoi.
// second argument e chaile akta function refarence o dewa jai.

// second argument function na diye amra akta obejct pass korte pari jar majhe handler function ti thake , ete subidha holo amra ak shathe multiful kaj korte pari akta matro lister function use kore.

//addEventListener() syantx  addEventListener("event",lister)
//addEventListener() syantx  addEventListener("event",listerObj)

const btn = document.getElementById("btn");
btn.addEventListener("click", () => alert("button clicked")); // second argu function pass kora hoiche

// function refarench use kore event add kora
function handleClick() {
  console.log(para);
}
const clk = document.getElementById("clk");
clk.addEventListener("click", handleClick);

// object pathiye
const uihandler = {
  handleEvent(e) {
    if (e.type === "click") {
      this.handleClk();
    } else if (e.type === "mouseenter") {
      this.handleMosereEnter();
    }
  },
  handleClk() {
    console.log("button click ---");
  },
  handleMosereEnter() {
    console.log("mosuer enter kora hoiche");
  },
};
const show = document.getElementById("show");
show.addEventListener("mouseenter", uihandler);
show.addEventListener("click", uihandler);

// amara chaile second argument e null rakht pari ete javaScript amader kono error dibe na
// eti kaje lage jhokhon dynamic vabe event handle korte hoi / conditional programing korte hoi
// dhorun jodi user login obostai thake tobe amder btn kaj korbe na hole kicui korbe na ,
const button = document.getElementById("button");
const isLoding = false; // button false thakle button click korle kicui hobe na
const myHandler = () => (isLoding ? console.log("Button was clicked") : null);

button.addEventListener("click", myHandler);

// input event
const input = document.getElementById("input");

input.addEventListener("input", () => {
  console.log(input.value);
});
