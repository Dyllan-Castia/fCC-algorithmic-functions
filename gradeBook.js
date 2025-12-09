const gradeScale = {
  "A+": {min: 100, max: 100},
  "A": {min: 90, max: 99},
  "B": {min: 80, max: 89},
  "C": {min: 70, max: 79},
  "D": {min: 60, max: 69},
  "F": {min: 0, max: 59}
}

function getAverage(scores) {
  const sum = scores.reduce((acc, cur) => acc + cur, 0);
  return sum / scores.length;
}
console.log(getAverage([89, 67, 95, 49, 69]));
//73.8

function getGrade(score) {
  for (let letter in gradeScale) {
    let range =  gradeScale[letter];
    
    if (score >= range.min && score <= range.max) {

    return letter;
    }
  }
}
console.log(getGrade(73));
//C

function hasPassingGrade(score) {
  if (getGrade(score) !== "F") {
    return true;
  }
  return false;
}
console.log(hasPassingGrade(49));
//false

function studentMsg(average, score) {
  if (getGrade(score) !== "F") {
    return `Class average: ${getAverage(average)}. Your grade: ${getGrade(score)}. You passed the course.`;
  }
  return `Class average: ${getAverage(average)}. Your grade: ${getGrade(score)}. You failed the course.`;
}
console.log(studentMsg([89, 74, 95, 47], 67))
//Class average: 76.25. Your grade: D. You passed the course.
