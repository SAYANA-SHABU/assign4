// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

rl.question('Enter elements (separate with space): ', (answer) => {
  const arr = answer.split(" ").map(Number);
  if(isPrime(arr[0])) console.log(`The first element is prime`);
  else console.log(`The first element is not prime`);
  rl.close();
});
