const express = require('express');
const authRouter=require("./routes/auth");
const postRouter = require("./routes/post");
// create an instance of express
const app = express();

app.use("/auth" , authRouter );
app.use("/post" , postRouter);



app.get('/',(req,res)=>{            
    res.send('Welcome Back ')
})


app.get('/template',(req,res)=>{
     res.sendFile(__dirname+'/index.html')                                              
})

app.get('/middle',(req,res,next)=>{
    console.log('request number 1 ')
    next()
}, (req,res,next)=>{
   res.send('request number 2 ')
})

app.get('/exp1' , (req,res)=>{
    //res.redirect('https://www.google.com')                       
    //res.redirect('/template')    
    //res.end('hello and goodBuy ')  
            
})



app.listen(5000, () => {
    console.log('Listening on port 5000');  
});


