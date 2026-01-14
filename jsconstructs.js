const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for loop
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(`Student ${i + 1} needs to improve: ${studentReport[i]}%`);
  }
  i++;
}

// while loop
let j = 0;
while (j < studentReport.length) {
  if (studentReport[j] < LIMIT) {
    console.log(`Student ${j + 1} needs to improve: ${studentReport[j]}%`);
  }
  j++;
}   
//foreach loop
studentReport.forEach((score, index) => {
  if (score < LIMIT) {
    console.log(`Student ${index + 1} needs to improve: ${score}%`);
  }
});
//for...in loop
for (let index in studentReport) {
  if (studentReport[index] < LIMIT) {
    console.log(`Student ${parseInt(index) + 1} needs to improve: ${studentReport[index]}%`);
  }
}