const express = require('express');
const bodyParser = require('body-parser');
const routesExample = require('./routes/example.js');
const routesFetchMovie = require('./routes/fetchMovie.js');
const db = require('./database/database.js');

// db.authenticate()
//  .then(() => console.log('database conected'))
//  .catch(err => console.log('Error:' + err))

const app = express();
var PORT = process.env.PORT || 8001;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesExample);
app.use('/', routesFetchMovie);

app.use('/users', require('./routes/users.js'));



 // this is the backend routing port
 db.sync().then(() => app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}.`);
}))
