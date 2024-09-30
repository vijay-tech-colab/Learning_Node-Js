// node js introduction 1
// how to install node js 2
// what is REPL (read evel print loop) 3

/* 
    !Node.js is a runtime environment that allows developers to execute JavaScript
    !code outside of a web browser. It is built on Chrome’s V8 JavaScript engine, 
    !which compiles JavaScript to machine code, making it highly performant.
    !Node.js is primarily used for building server-side applications
*/


// ! FIRST NODE JS PROJECT

const readLine = require('readline');
// ? The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Please enter your name : ", (name) => {
    console.log("you entered : " + " " + name);
    rl.close();
});

rl.on('close',() => console.log('interface closed !'));