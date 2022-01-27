const Sequelize = require("sequelize");
const users = require('./users')
const db = require("./database");

// campuses.hasMany(students, {
//     foreignKey: 'campus'
// })

// students.belongsTo(campuses, 
//     {
//         foreignKey: 'campus',
//         as: 'att_campus'
//     }
// )

module.exports = { db, users }