// break statement: Current loop/switch থেকে বেরিয়ে যাওয়ার জন্য ব্যবহৃত হয়। Loop terminate করে পরবর্তী statement execute করে।

for (let i = 0; i <= 10; i++) {
  if (i === 5) break; // sob condition thik ache but break key word dewr karone loop ta ber hoye aschhe
  console.log("The number is Less than or equal 10 = " + i);
}
let text = "";
loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) {
      break loop1;
    }
    text += i + "\n";
  }
}
console.log(text);
