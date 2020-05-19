const express = require('express');
const router = express.Router();
const NewJob = require('../models/AdminJobs');


///ROUTES GET ADMIN
router.get('/admin/jobs', (req, res) => {
    const jobs = NewJob.find()
    jobs.then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});



///ROUTES POST ADMIN
router.post('/newjob', (req, res) => {
    console.log(req)
    const newJob = new NewJob({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        requirements: req.body.requirements,
        salary: req.body.salary,
        number_of_kids: req.body.number_of_kids,
        sitter_skills: req.body.sitter_skills
    });

    newJob.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
});







module.exports = router;