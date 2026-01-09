const express = require("express");
const db = require("./utils/db-connection");
const app = express();


// models 

const playermodel = require("./models/player");

app.get("/",(req,res)=>{
    res.send("hello from server");
})



db.sync({force:true}).then(()=>{

    app.listen(3000,()=>{
    console.log("server is running");
})

}).catch((err)=>{
    console.log(err);
})
