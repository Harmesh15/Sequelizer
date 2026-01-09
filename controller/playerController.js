const Player = require("../models/player");

const addEntries = async (req,res)=>{
    try{
         const {email,name} = req.body;
         const player = await Player.create({
            email:email,
            name:name
         });

         res.status(201).send("entry created Succesfull");
  }

  catch(error){
    res.status(500).send("not created",error);
         
    }
 
}

module.exports = {
    addEntries,
}
   