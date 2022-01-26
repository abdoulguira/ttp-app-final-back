const express = require('express');
const bodyParser = require('body-parser');
const routesExample = require('./routes/example.js');
const routesFetchMovie = require('./routes/fetchMovie.js');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesExample);
app.use('/', routesFetchMovie);

const PORT = 8001; // this is the backend routing port
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}.`);
});