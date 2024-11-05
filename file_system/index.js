const fs = require('fs');
// ! writing the data 
// fs.writeFileSync('./content/data.txt','this is learning face');


// read the data fs Api
// const data = fs.readFileSync('./content/data.txt','utf-8');
// console.log(data);


// append the data with existing file
// fs.appendFileSync('./content/data.txt','welcome the file');

// delete the file
// fs.unlinkSync('./content/data.txt');

// read the content of the file
const file = fs.readdirSync('./content');
console.log(file); // [ 'data.txt', 'newFile.txt' ]


// Asynchronous method of FILE SYSTEM MODULE
fs.readFile('./content/data.txt','utf-8',(err,data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

