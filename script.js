let submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  let newPassed = newScore >= 60;
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  });
}
// addSubmission(submissions, "James", 73, "2021-04-26");
// console.log(submissions);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
// deleteSubmissionByIndex(submissions, 0);
// console.log(submissions);

function deleteSubmissionByName(array, name) {
  const index = array.findIndex((submission) => submission.name === name);

  array.splice(index, 1);
}
// deleteSubmissionByName(submissions, "Jill");
// console.log(submissions);

// Declare a function named editSubmission
// Parameter(s): array, index, score
// Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

function editSubmission(array, index, score) {
  // const score = array.findIndex((submission) => submission.index)
  array[index].score = score;
  array[index].passed = passed >= 60 ? true : false;
}
console.log(submissions);
