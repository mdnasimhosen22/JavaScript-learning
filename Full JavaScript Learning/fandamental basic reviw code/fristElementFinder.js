function findElement(array, fun) {
  for (let i = 0; i < array.length; i++) {
    if (fun(array[i])) {
      return array[i];
    }
  }
  return undefined;
}
const Result = findElement([1, 2, 3, 4, 8], (n) => {
  return n > 6;
});
console.log(Result);
