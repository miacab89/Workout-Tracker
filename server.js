const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan-body"); 

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ useNewUrlParser: true }); 

app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));

app.post("/workout", ({body}, res) => {
  db.workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});