const express = require('express');
const bodyParser = require('body-parser');
const routesExample = require('./routes/example.js');


const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesExample);

const PORT = 5000; // this is the backend routing port
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}.`);
});