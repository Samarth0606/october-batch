
// const express = require('express');

// const app = express() //instance of your application (entire app only)

// app.listen(8080, ()=>{
//     console.log(`server is connected at port 8080`);
// })


// -------------------------------------------------


const express = require('express');
const app = express() //instance of your application (entire app only)

// root route/path
app.get('/' , (req,res)=>{
    // if i dont send res page will keep on reloading
    res.send("HI I AM ROOT ROUTE") //cycle completes
} )

app.post('/samarth' , (req,res)=>{
    res.send("<h1>I am SAMARTH POST</h1>")
} )

app.get('/samarthh' , (req,res)=>{
    res.status(201).send("<h1>I am SAMARTH GET</h1>")
} )


const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`server is connected at port : ${PORT}`);
})

