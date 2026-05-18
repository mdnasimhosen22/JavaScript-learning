function getAverage(totalScorsArr) {
  const totalScor = totalScorsArr.reduce((total, currValue) => {
    return total + currValue;
  }, 0);
  const ScoreAvarage = totalScor / totalScorsArr.length;
  return ScoreAvarage;
}

function getGrade(stuScore) {
  if (stuScore === 100) {
    return "A+";
  }
  if (stuScore <= 99 && stuScore >= 90) {
    return "A";
  }
  if (stuScore <= 89 && stuScore >= 80) {
    return "B";
  }
  if (stuScore <= 79 && stuScore >= 70) {
    return "C";
  }
  if (stuScore <= 69 && stuScore >= 60) {
    return "D";
  }
  if (stuScore <= 59 && stuScore >= 0) {
    return "F";
  }
}

function hasPassingGrade(score) {
  if (score >= 60) {
    return true;
  } else {
    return false;
  }
}

function studentMsg(totalScorsArr, scores) {
  const Average = getAverage(totalScorsArr);
  const Grade = getGrade(scores);
  if (hasPassingGrade(scores)) {
    return `Class average: ${Average}. Your grade: ${Grade}. You passed the course.`;
  } else {
    return `Class average: ${Average}. Your grade: ${Grade}. You failed the course.`;
  }
}
console.log(studentMsg([80, 70, 40, 50], 100));
