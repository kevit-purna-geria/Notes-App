const chalk = require('chalk');

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));
//Without inverse
console.log(chalk.bold.bgGreen("Purna"));

//With Inverse
console.log(chalk.bold.inverse.yellow("Purna"));