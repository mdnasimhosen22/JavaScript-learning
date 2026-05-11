function largestOfAll(array) {
  let Result = [];
  for (let i = 0; i < array.length; i++) {
    let largestNum = array[i][0];
    // console.log(`--- akhon sub array ${i} te achi---`);
    for (let j = 0; j < array[i].length; j++) {
      //   console.log(
      //     `chack korchi: ${array[i][j]}, bortomar boro number: ${largestNum}`,
      //   );
      if (array[i][j] > largestNum) {
        largestNum = array[i][j];
      }
      //   console.log(`chack korchi: ${array[i][j]}, bortomar boro number: ${largestNum}`,);
    }
    Result.push(largestNum);
    // console.log(`sub array${i} sesh, ei array bin num: ${largestNum}`);
    // console.log(` -------`);
  }
  console.log(Result);
}
largestOfAll([
  [1, 23, 4],
  [2, 3, 4],
  [7, 9, 60],
  [, , , ,],
]);
