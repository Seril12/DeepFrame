const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "public")));

app.post('/login', (req,res)=>{
   const {username,password} = req.body;

   if(username === "seril" && password==="12345"){
    res.redirect("http://localhost:5173/"); 
   }
   else{
    res.send("Invalid Credentials");
   }
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'));
});

app.listen(port,()=>{
    console.log(`Server running at  http://localhost:${port}`);
});