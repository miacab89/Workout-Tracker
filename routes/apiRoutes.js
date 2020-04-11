const express = require('express')
let router = express.Router()
let db = require('../models/indexModel')

router.get('/api', function (req, res) {
    res.send('request sent!')
  })


  router.put('/api/workouts/:id', function (req, res) {
      db.exerciseModel.create(req.body)
      console.log(req.body)
    res.json({})
  });

  router.post('/api/workouts', function (req, res) {
    console.log(req.body)
  res.send('workout added!')
});

module.exports = router