function pyramid(char, count, isRevarse) {
  let row = [];
  for (let i = 1; i <= count; i++) {
    let space = " ".repeat(count - i);
    let pattern = char.repeat(2 * i - 1);
    let fullRow = space + pattern;
    if (isRevarse) {
      row.unshift(fullRow);
    } else {
      row.push(fullRow);
    }
  }
  return "\n" + row.join("\n") + "\n";
}
console.log(pyramid("*", 11, false));
