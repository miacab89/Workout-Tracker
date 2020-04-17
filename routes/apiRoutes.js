const express = require('express')
let router = express.Router()
let db = require('../models/indexModel')

router.get('/api/workouts', function (req, res) {
  db.workout.find().then(data=> {
    res.json(data);
  }).catch(err => {
    res.send(err); 
  });
});

router.get('/api/workouts/range', function (req, res) {
  db.workout().sort({day: -1}).limit(7),then(function(data) {
    res.json(data)
  })
}); 

router.post('/api/workouts', function (req, res) {
  db.workout.create([]).then(workout => {
    res.json(workout);
  }).catch(err => {
    res.json(err); 
  })
});


  router.put('/api/workouts/:id', ({ body, params }, res) => {

      db.workout.fineOneAndUpdate(
      params.id, 
      { $push: { exercises: body } },
      { new: true, runValidators: true}
      .then(function(workout){
        return res.json(workout)
    }).catch(function(err){
        res.json(err);
    }))
  
}); 

module.exports = router