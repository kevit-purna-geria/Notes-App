const fs = require('fs');
const validator = require('validator');

fs.writeFileSync("notes.txt","new!")

// Append to txt file instead of overwriting
fs.appendFileSync("notes.txt", "\n append")

console.log(validator.isEmail("hwahprjfpphpwi"));

console.log(validator.isURL("https://www.npmjs.com/package/validator"));

const chalk = require('chalk');

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));
//Without inverse
console.log(chalk.bold.hex('#FF0050')("Purna"));

//With Inverse
console.log(chalk.bold.inverse.yellow("Purna"));


//getting console input
console.log(process.argv[2]);