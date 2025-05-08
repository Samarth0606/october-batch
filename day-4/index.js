
// const express = require('express');
// const app = express();

// //middleware -> fn that runs on every incoming request (that too in the middle of 2 states)
// app.use((req,res,next)=>{
//     console.log("hello i am a middleware");
//     // res.send("yehi se vapas") //cycle got complete
//     next()
// })

// app.get('/sam' , (req,res)=>{
//     res.send("welcome from sam")
// })

// app.get('/vohra' , (req,res)=>{
//     res.send("welcome from vohra")
// })

// const PORT = 8000;
// app.listen(PORT , ()=>{
//     console.log(`SERVER CONNECTED AT PORT: ${PORT}`); 
// })


// -------------------------------------------------------

const express = require('express');
const app = express();

let username = null;
//middleware -> fn that runs on every incoming request (that too in the middle of 2 states)
// app.use((req,res,next)=>{
//    username = "samarth";
//    next();
// })

//m-1
app.use(express.json()) //predefined
//m-2
app.use('/sam' , (req,res,next)=>{
   console.log("i am 1st middleware");
   username = "samarth"; //login
   next();
})
//m-3
app.use('/sam' , (req,res,next)=>{
    console.log("i am 2nd middleware");
    next();
})

app.get('/sam' , (req,res)=>{
   if(username === "samarth"){
    return res.send(`WELCOME ${username}`)
   }
   return res.send(`Invalid User`)
})


const PORT = 8000;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`); 
})





