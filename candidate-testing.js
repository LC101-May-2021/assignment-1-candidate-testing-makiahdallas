const input = require('readline-sync');

//TODO 2: modify your quiz app to ask 5 questions

// TODO 1.1a: Define candidateName // 
let candidateName= "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space?";
let correctAnswer="Sally Ride";
let candidateAnswer;
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = ["Sally ride",
 "true", 
 "40",
 "trajectory",
 "3"
];

let candidateAnswers = [""];

function askForName() {
// TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
  console.log(`Hello, ${candidateName}! Welcome to your quiz.\nPlease answer the following questions:`);
  console.log("----------------------");
}

function askQuestion() {
// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0; i<questions.length; i++) {
//input.question(questions[i]); 
  candidateAnswers[i] = input.question(questions[i]);
  if (candidateAnswers[i].toLowerCase().trim(" ") === correctAnswers[i].toLowerCase().trim(" ")) {
  console.log(`Your Answer: ${candidateAnswers[i]} is correct!
  Correct Answer: ${correctAnswers[i]}`);
  } else { 
  console.log(`Sorry, ${candidateAnswers[i]} is not correct.\nCorrect Answer: ${correctAnswers[i]}`); }
}
}

function gradeQuiz() {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly
  console.log(`---------------`);

let correctQuestions=0;
let grade; 

//this block is for scoring
for (let i=0; i<candidateAnswers.length; i=i+1) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  correctQuestions++;  
  } 
  
//the following block checks for invalid inputs
//while (candidateAnswers[i].toLowerCase() === undefined || candidateAnswers[i].toLowerCase() === null) {
//  console.log("Please enter valid answers.");
//}
}
grade = (correctQuestions / questions.length) *100;

if (grade >= 80) { 
  console.log("***You PASSED! Good job.***"); }
  else {
  console.log("***Sorry, you FAILED.***");
}

console.log(`OVERALL GRADE: ${grade} %`);
return grade;
}

function runProgram() {
  // TODO 1.1c: Ask for candidate's name //
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected
module.exports = {
candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
