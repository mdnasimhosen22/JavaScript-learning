function titleCase(str) {
  const wordChar = str.split(" ");
  const newWordArr = wordChar.map((word) => {
    const fristWordFistChar = word[0].toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    const capitalizeWord = fristWordFistChar + restOfWord;
    return capitalizeWord;
  });
  return newWordArr.join(" ");
}
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
