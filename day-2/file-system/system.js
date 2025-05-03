

const fs = require('fs'); //module
// ------- CREATE ---------
// fs.writeFile()
// fs.writeFileSync('./text.txt', "Hey there i am Samarth" )

//overriding (old data deletes)
// fs.writeFileSync('./text.txt', "Hey there i am Shubham" )

// -------------------------------------------------------

// -------- READ ---------
// let result = fs.readFileSync('./contacts.txt' , "utf-8")
// console.log(result);

// -------------------------------------------------------

// -------- UPDATE --------

// fs.appendFileSync('./contacts.txt' , `${new Date().getDate().toLocaleString()} is the data`)

// -------------------------------------------------------

// -------- COPY --------
// fs.copyFileSync('./text.txt' , './newFile.txt')

// -------------------------------------------------------

// -------- DELETE --------
// fs.unlinkSync('./newFile.txt')


// -------------------------------------------------------

// -------- STATS --------

console.log( fs.statSync('./contacts.txt') );
console.log( fs.statSync('./contacts.txt').isFile() );



