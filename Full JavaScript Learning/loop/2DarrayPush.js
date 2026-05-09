function chunkArrayInGroups(array, num) {
  const result = [];
  for (let i = 0; i < array.length; i += num) {
    result.push(array.slice(i, i + num));
  }
  return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6], 2));
