const Sequelize = require('sequelize')

const db = new Sequelize(
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'kylexue',
        database: 'movieworld'
    }
)

module.exports = db