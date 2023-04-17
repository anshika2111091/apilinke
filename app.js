const express=require('express');
const app=express();
const path=require("path");
const content=require('./content');
const port=process.env.PORT||4000;

app.get('/upload',(req,res)=>{
    res.send("upload");
});
app.post("/upload",(req,res)=>{
   res.json({
    success:1,
    profile_url:`http://drive.google.com/uc?export=view&id=1SRy-RPhL-EcKz3Xvq9a94vEjTEAxti_Z`,
    content:content.tweet
   })
})

app.listen(port,()=>{
    console.log("server up and running");
})