const express = require("express");
const app  = express();

const port = 3000;


app.listen(port, ()=>{
    console.log(`Port listen ${port}`);
})



app.use("/second", (req, res, next)=>{
    let code = "<h1> Hello, aap Kaise ho ?"
    res.send(code);
})

app.use("/id/:username", (req,res)=>{
    let {username} = req.params;
    res.send(`This is account of ${username}`)
})