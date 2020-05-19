const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


require('dotenv/config');

//THIS IS FOR BODY PARSER
app.use(bodyParser.json());

//import routes
const jobsRoutes = require('./routes/jobs/jobs');
app.use('/jobs', jobsRoutes);

const sitterProfiles = require('./routes/profiles/sitter');
app.use('/sitter', sitterProfiles);



///middlewares - function that executes when we hit a route



///connect to database
mongoose.connect( process.env.DB_CONNECTION, 
    { useNewUrlParser: true},
    () => 
    console.log("connected to DB")
);


///404 error page

app.use((req, res, next) => {
    res.status(404).send("page not found")
})


///listen to the server
app.listen(3000);