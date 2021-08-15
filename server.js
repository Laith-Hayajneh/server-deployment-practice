'use strict';
const express=require('express');
const server=express();
const notFoundHandler =require('./handlers/404.js');
const errorHandler =require('./handlers/500.js');



server.get('/',(req,res)=>{
    res.status(200).send("it's working")
})

// server.get('/da',(req,res)=>{
//     res.status(200).send("dssd")
// })



server.get('/data',(req,res)=>{
    let output={
        name:"laith hayajneh",
        age:"23",
        major:"Geology",
        time: new Date().toString(),
    };
    res.status(200).json(output)
    
})



server.get('/bad',(req,res,next)=>{
    next('error from bad end point')
})

server.get('/status',(req,res)=>{
    let status={
        "domain":"https://laith-server-deploy-dev.herokuapp.com/",
        "status":"running",
        "PORT":3000
    }
    res.status(200).json(status)
})

server.use('*', notFoundHandler);
server.use(errorHandler);





function start(port){
    server.listen(port,()=>console.log(`listining on port ${port}`))
}



module.exports={
    start,
    server
}