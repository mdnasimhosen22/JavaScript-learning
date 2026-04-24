const questions = [];
questions.push(
  {
    category: "Math",
    question: "4 / 2 = ?",
    choices: ["4", "5", "2"],
    answer: "2",
  },
  {
    category: "Technical",
    question: "Who is languege of web ?",
    choices: ["Python", "java", "javaScript"],
    answer: "javaScript",
  },
  {
    category: "Genarel",
    question: "what is you country name ?",
    choices: ["Bangladesh", "japan", "India"],
    answer: "Bangladesh",
  },
  {
    category: "Giographical",
    question: "what is your Capital name ?",
    choices: ["Pabna", "Rajshahi", "Dhaka"],
    answer: "Dhaka",
  },
  {
    category: "English",
    question: "Synonym of 'Happy'?",
    choices: ["Sad", "Joyful", "Angry"],
    answer: "Joyful",
  },
);

function getRandomQuestion(questionsArray) {
  const reabdomQues = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[reabdomQues];
}
function getRandomComputerChoice(choicesArray) {
  const indexAns = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[indexAns];
}
function getResults(quenstionObj, computerChoiec) {
  if (computerChoiec === quenstionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${quenstionObj.answer}`;
  }
}

const question = getRandomQuestion(questions);
console.log("Question = " + question.question);
console.log("Choices = " + question.choices);
const ComputerChoice = getRandomComputerChoice(question.choices);
console.log("computer choices ans = " + ComputerChoice);
const Result = getResults(question, ComputerChoice);
console.log(Result);
