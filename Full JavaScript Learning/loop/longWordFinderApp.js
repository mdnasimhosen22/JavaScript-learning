function findLongestWordLength(sen) {
  const word = sen.split(" ");
  let longWord = "";
  for (let i = 0; i < word.length; i++) {
    const currentWord = word[i];
    if (currentWord.length > longWord.length) {
      longWord = currentWord;
    }
  }
  return longWord;
}

const mySen = "Hei bro I'm Nasim , I'm a developer. wcould i help you";
const result = findLongestWordLength(mySen);
console.log(result);
