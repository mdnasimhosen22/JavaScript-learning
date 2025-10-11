let day;
let date = 0;
const demo = document.getElementById("demo");

setInterval(() => {
  // fade-out effect
  demo.classList.remove("show");

  setTimeout(() => {
    switch (date) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }

    demo.textContent = day;
    // fade-in effect
    demo.classList.add("show");

    date++;
    if (date > 6) date = 0;
  }, 400); // fade-out এর পর text change হবে
}, 2000); // প্রতি 2 সেকেন্ড পর পর পরিবর্তন
