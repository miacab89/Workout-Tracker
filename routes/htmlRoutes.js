const express = require('express')
let router = express.Router()
let path = require('path')




router.get('/', function (req, res) {
    res.sendFile(path.resolve('./public/index.html'))
  });
  

router.get('/exercise', function (req, res) {
    console.log(req.body); 
    res.sendFile(path.resolve('./public/exercise.html'))
  });


router.get('/stats', function (req, res) {
    console.log(req.body); 
    res.sendFile(path.resolve('./public/stats.html'))
  });


  module.exports = router