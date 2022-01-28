const Sequelize = require('sequelize')

// const db = new Sequelize(
//     {
//         dialect: 'postgres',
//         host: 'localhost',
//         port: 5432,
//         username: 'postgres',
//         password:'aA60120012',
//         database: 'movieworld'
//     }


// )


const db = new Sequelize(process.env.DATABASE_URL
,  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);


module.exports = db