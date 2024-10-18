// Step 1: Creating the studentGrades array
let studentGrades = [
  ["Nath", [88, 90, 92], "pass"],
  ["Gelo", [72, 68, 74], "pass"],
  ["Mark", [60, 64, 58], "pass"],
];

// Step 2: Adding another student
studentGrades.push(["Mitch", [95, 87, 91], "pass"]);

// Step 3: Calculate average grades and update status
studentGrades.forEach((student) => {
  let grades = student[1];
  let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  console.log(`${student[0]}'s average grade: ${average}`);

  // Update status based on the average
  if (average < 70) {
    student[2] = "fail";
  } else {
    student[2] = "pass";
  }
});

// Step 4: Using map()
let updatedStudentGrades = studentGrades.map((student) => {
  let grades = student[1];
  let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

  // Update status based on the average
  let status = average >= 85 ? "honor pass" : average >= 70 ? "pass" : "fail";
  return [student[0], student[1], status];
});

console.log(updatedStudentGrades);

// Step 5: Calculate class average
let allGrades = studentGrades.reduce(
  (acc, student) => acc.concat(student[1]),
  []
);
let classAverage =
  allGrades.reduce((sum, grade) => sum + grade, 0) / allGrades.length;
console.log(`Class average: ${classAverage}`);
