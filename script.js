let submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

// Parameter(s): array, newName, newScore, newDate
// Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

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
