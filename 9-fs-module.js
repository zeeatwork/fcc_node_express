const { readFileSync, writeFileSync } = require("fs");
console.log('start')
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

//console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Hereis the result: ${first}, ${second}`,
  { flag: "a" }
); //synchronously writes data to a file replaces if it already exists
console.log('done with this')
console.log('starting the next one')