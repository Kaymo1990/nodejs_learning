const theValue = require('./notes/transfer');
const validate = require ('validator');
const chalk = require('chalk');
function hello(name) {
    console.log(`hello ${name}`);
}

console.log(validate.isURL('khansham@hotmail.com'));

console.log(chalk.blue.bold.underline("hello world"));
