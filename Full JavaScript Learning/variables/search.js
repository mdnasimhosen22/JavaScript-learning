let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("w");
console.log("indexOf locte = " + index);

let name = "naSi@#$$%m";
let len = name.length;
let uppercase = "";
let lowercase = "";
let others = "";
for (let i = 0; i < len; i++) {
  let ch = name[i];
  if (ch >= "A" && ch <= "Z") {
    continue;
  }
  if (ch >= "a" && ch <= "z") {
    lowercase += ch;
  } else {
    others += ch;
  }
}
console.log(lowercase);
console.log(others);
