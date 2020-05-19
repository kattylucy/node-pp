const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


require('dotenv/config');

//THIS IS FOR BODY PARSER
app.use(bodyParser.json());

//import routes
const adminRoutes = require('./routes/admin');
app.use('/', adminRoutes);



///middlewares - function that executes when we hit a route



///connect to database
mongoose.connect( process.env.DB_CONNECTION, 
    { useNewUrlParser: true},
    () => 
    console.log("connected to DB")
);


///listen to the server
app.listen(3000);