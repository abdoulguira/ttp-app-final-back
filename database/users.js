
const Sequelize = require("sequelize");
const db = require("./database");

const Gigs = db.define("users", {
    
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
  },

  username: {
      type: Sequelize.STRING,
      allowNull: false,
  },


 
  user_password: {
    type: Sequelize.STRING,
    allowNull: false,
},


  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  gender: {
    type: Sequelize.STRING,
    allowNull: true,
  },

    
}, {
    timestamps: false,
    initialAutoIncrement: 1
  })

  


module.exports = Gigs
