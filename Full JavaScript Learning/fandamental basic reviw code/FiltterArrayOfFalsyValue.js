function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const result = bouncer([7, "ate", "", false, null, 9]);
console.log(result);

// short code
function bouncer1(arr) {
  const newArr = arr.filter((item) => Boolean(item));
  return newArr;
}
const result1 = bouncer1([7, "ate", "", false, null, 9]);
console.log(result1);
