const theValue = require('./notes/transfer').default
const validate = require ('validator')
function hello(name) {
    console.log(`hello ${name}`);
}

console.log(validate.isURL('khansham@hotmail.com'));
