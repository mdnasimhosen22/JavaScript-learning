function mutation(array) {
  const fristWord = array[0].toLowerCase();
  const secondWord = array[1].toLowerCase();
  for (let i = 0; i < secondWord.length; i++) {
    fristWord.indexOf(secondWord[i]);
    if (fristWord.indexOf(secondWord[i]) === -1) {
      return false;
    }
  }
  return true;
}
const result = mutation(["hello", "Hello"]);
console.log(result);
const result1 = mutation(["hello", "hei"]);
console.log(result1);
