const Sequelize = require('sequelize')

const db = new Sequelize(
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password:'aA60120012',
        database: 'movieworld'
    }
)

module.exports = db