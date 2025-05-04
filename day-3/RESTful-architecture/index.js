
const express = require('express');
const app =  express();

app.use(express.json()) //body parsing middleware for JSON data

// ROOT ROUTE
app.get('/' , (req,res)=>{
    res.send("HI I AM ROOT ROUTE")
})

let comments = [
    {
        id: 0,
        username : "SAM",
        comment : "Study Web Else you wont get JOBS!!"
    },
    {
        id: 1,
        username : "AVIRAL",
        comment : "LEARN NODEJS EXPRESSJS"
    },
    {
        id: 2,
        username : "ADITYA",
        comment : "GREAT LEARNING"
    },
    {
        id: 3,
        username : "ZEESHAN",
        comment : "LEARN REACT"
    }
]

// RESTful CRUD
// READ
app.get('/comments' , (req,res)=>{
    // res.send(comments)
    res.status(200).json({data: comments})
})

// CREATE
app.post('/comments' , (req,res)=>{
    // let newComment = req.body; // get the post data
    // console.log(newComment , "newComment");

    let {username,comment} = req.body; // get the post data
    comments.push({username, comment, id:comments.length})
    res.send(comments)
})

// UPDATE
app.patch('/comments/:iddd' , (req,res)=>{
    let {iddd} = req.params; //string => convert number
//  console.log( typeof(iddd , "iddd") );
    let {comment} = req.body;
    let foundComment = comments.find((comment)=>comment.id === parseInt(iddd))
    foundComment.comment = comment;
    res.send(comments)
})

// DELETE
app.delete('/comments/:id' , (req,res)=>{
    let {id} = req.params;
    let remainingArr = comments.filter((comment)=>comment.id !== parseInt(id))
    comments = remainingArr;
    res.json({updatedArr: comments})
})


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);  
})




















