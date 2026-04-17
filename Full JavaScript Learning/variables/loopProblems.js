function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  const Len = strs[0].length;
  let prefix = "";
  for (let i = 0; i < Len; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
}
// const strs = ["flow", "flowers", "fluter"];
// const result = longestCommonPrefix(strs);
// console.log(result);

//optimayes code

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  // সবচেয়ে ছোট string বের করি
  let shortest = strs.reduce((a, b) => (a.length < b.length ? a : b));
  console.log(shortest);

  for (let i = 0; i < shortest.length; i++) {
    let char = shortest[i];

    for (let str of strs) {
      if (str[i] !== char) {
        return shortest.slice(0, i);
      }
    }
  }

  return shortest;
}
const strs = ["flow", "flowers", "fluter"];
const result = longestCommonPrefix(strs);
console.log(result);
