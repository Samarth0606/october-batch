import express from 'express';
const app = express();
import mongoose from 'mongoose';
import {restRoutes} from './routes/restaurant.route.js'

// DB connect
mongoose.connect('mongodb+srv://samarthvohraindia:vIPWvMklqMZTmptI@cluster0.9cbny99.mongodb.net/')
.then(()=>{
    console.log("DB CONNECTED SUCCESSFULLY");
})
.catch((err)=>{
    console.log(err , "err while connecting DB");
})

app.use(express.json()) //body parsing middleware

app.use((req,res,next)=>{
    console.log("middleware hu mai");
    next();
})

app.get('/' , (req,res)=>{
    res.send("welcome to root route")
})


restRoutes(app);

const PORT = 8000;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})


// samarthvohraindia
// vIPWvMklqMZTmptI
// mongodb+srv://samarthvohraindia:vIPWvMklqMZTmptI@cluster0.9cbny99.mongodb.net/










