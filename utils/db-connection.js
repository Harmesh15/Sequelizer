const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('playersmanagement','root','harmesh15',{
    host:'localhost',
    dialect:'mysql'
});

  (async ()=>{ 
  try{
      await sequelize.authenticate();
      console.log("connection created");
  }catch(err){
    console.log(err);
  }
})();

module.exports = sequelize;