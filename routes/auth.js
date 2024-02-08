const express = require('express');

// create an instance of express
const authRouter = express.Router() ;
//http://localhost:5000/node/?name=glis&firstname=node
//pass params with query parameters to express  server 
//app.get('/tic/:name/:firstname',(req,res)=>{            
//   console.log('test1 ', req.paramas.name)
//console.log('test2 ', req.paramas.firstname)
//})




authRouter.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');

});


//app.get('/auth/login/:firstname/:password',(req,res)=>{ 
 //app.get('/auth/login',(req,res)=>{ 
      //const firstname=
     // const password
   //  res.send("  votre login passe avec  succes")
//})





//app.get('/auth/register',(req,res)=>{ 
//res.redirect('/template') 
//})  

//app.get('/auth/register',(req,res)=>{
 //   res.sendFile(__dirname+'/index.html')                                              
//})

authRouter.get('/register', (req, res) => {
    res.send('<h1>Registration successful </h1>'); 
})








module.exports= authRouter ;