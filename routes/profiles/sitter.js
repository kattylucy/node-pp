const express = require('express');
const router = express.Router();
const NewSitterProfile = require('../../models/AdminProfiles');


///get sitter profile

router.get('/', (req, res) => {
    const jobs = NewSitterProfile.find()
    jobs.then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});

router.get('/:id', (req, res) => {
    const sitterID = req.params.id;
    const sitter = NewSitterProfile.findById(sitterID)
    sitter.then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});

///ROUTES POST SITTER PROFILE
router.post('/newsitter', (req, res) => {
    const newSitter = new NewSitterProfile({
        name: req.body.name,
        bio: req.body.bio,
        location: req.body.location,
        phone_number: req.body.phone_number,
        joined_on: req.body.joined_on,
        years_of_experience: req.body.years_of_experience,
        sitter_skills: req.body.sitter_skills,
        education: req.body.education,
        profile_picture: req.body.profile_picture,
        email: req.body.email
    });

    newSitter.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
});








module.exports = router;