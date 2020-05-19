const mongoose = require('mongoose');

//create schema - represents how the post looks aka the data 

const NewJobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date_posted: {
        type: Date,
        default: Date.now
    },
    number_of_kids: {
        type: Number,
        default: 0
    },
    salary: {
        type: Number
    },
    location: {
        type: String
    },
    requirements: [{
        type:String
    }],
    sitter_skills:[{
        type:String
    }]
});





module.exports = mongoose.model('NewJob', NewJobSchema);