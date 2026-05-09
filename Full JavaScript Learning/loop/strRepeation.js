function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  if (num <= 0) {
    return "";
  }
  return result;
}
console.log(repeatStringNumTimes("*", 1));
