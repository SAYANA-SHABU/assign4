//Write a JavaScript program to find the most frequent item of an array
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter elements (separate with space): ', (answer) => {
  const arr = answer.split(" ");
  const frequency = {};
  for(const elem of arr){
    frequency[String(elem)] = (frequency[String(elem)] || 0) + 1;
  }
  const maxFrequency = Math.max(...Object.values(frequency));
  const mostFrequentElements = Object.entries(frequency).filter(([elem, freq]) => freq === maxFrequency).map(([elem]) => elem);
  console.log(mostFrequentElements);
  rl.close();
});
