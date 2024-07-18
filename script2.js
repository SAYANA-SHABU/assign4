// Write a JavaScript program to find the sum of squares of the elements of an array.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter elements (separate with space): ', (answer) => {
  const arr = answer.split(" ").map(Number);
function sumofsquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return sum;
}
const result = sumofsquares(arr);
console.log('Sum of squares is '+result); 
rl.close();
});
