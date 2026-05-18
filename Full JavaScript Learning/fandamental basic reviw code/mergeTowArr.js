function frankenSplice(arr1, arr2, index) {
  let newArr = [...arr2];
  newArr.splice(index, 0, ...arr1);
  return newArr;
}
console.log(frankenSplice([2, 3, 4], [1, 5, 6], 1));
