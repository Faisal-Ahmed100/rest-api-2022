const express=require('express');
const app=express();
require('./config/db');
const useRouter=require('./routes/user.route')


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/user",useRouter);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/./views/index.html")
});

app.use((req,res,next)=>{
    res.status(404).json({
        message:"page not found"
    })
});

app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"something is broke"
    })
});

module.exports=app;