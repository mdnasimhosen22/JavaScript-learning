// single missing letter detector

function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let crrCode = str.charCodeAt(i);
    let nextCode = str.charCodeAt(i + 1);

    if (nextCode !== crrCode + 1) {
      return String.fromCharCode(crrCode + 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));

// all missing letter detector
function fearNotLetterUpdated(str) {
  let missingLetter = "";
  for (let i = 0; i < str.length - 1; i++) {
    let crrCode = str.charCodeAt(i);
    let nextCode = str.charCodeAt(i + 1);

    if (nextCode > crrCode) {
      for (let j = crrCode + 1; j < nextCode; j++) {
        missingLetter += String.fromCharCode(j) + " = " + j + " / ";
      }
    }
  }
  return missingLetter.length > 0 ? missingLetter : undefined;
}

console.log(fearNotLetterUpdated("abcegim"));
