const express = require('express');
const bodyParser = require('body-parser');

const app = express();
require ('dotenv').load
const port = process.env.port || 3000;

let routes = require('./api/routes')
routes(app)

//Request not found
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

//Used for parsing parameters in the url
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Listen to a determined port (3000)
app.listen(port);
console.log('A replica of bookstore appears on: '+port);