
const http = require('http');
const fs = require('fs');

const myServer = http.createServer( (req,res)=>{
    let log = `samarth`;
    
    fs.appendFile('./contact.txt' , log , (err,resp)=>{
        switch(resp === "samarth"){
            case '/' : res.end("i am home page")
            break;
            case '/about' : res.end("i am about page")
            break;
            default: res.end("i am default page")
        }
    } ) 

    // res.end("Hello from server of http")
} );

const PORT = 8080;
myServer.listen(PORT , ()=>{
    console.log(`server connected at port: ${PORT}`);
})












