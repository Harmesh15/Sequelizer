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


const updateEntries = async(req,res)=>{
    try{
        const id = req.params.id;
        const {name} = req.body;
        console.log(id);
      
        const player = await Player.findByPk(id); //pk primary key;
          console.log(player);
        if(!player){
           return res.status(404).send("user not found");
        }
        player.name = name;
        await player.save();
        res.status(200).send("entrie updated");
    }catch(error){
        console.log(error);
        res.status(500).send("user not updated")
    }
}


const deleteEntries = async(req,res)=>{

    try{
        const {id} = req.params;

    const player = Player.destroy({
        where:{
            id:id
        }
    })

    if(!player){
        return res.status(404).send("user not found");
    }
    res.status(200).send("user delete");
    }catch(error){
        console.log(error);
        res.status(500).send("user not deleted");
    }
    
}

module.exports = {
    addEntries,
    updateEntries,
    deleteEntries
}
   