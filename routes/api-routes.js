const db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkouts) {
        res.json(dbWorkouts);
    })
        .catch(function(err) {
        res.json(err);
        });
  });

  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).sort({ day: -1 }).then(function(dbWorkout) {
        res.json(dbWorkout.slice(0,10));
    })
        .catch(function(err) {
        res.json(err);
        });
  });

  app.get("/api/workouts", function(req, res) {
    db.Workout.create({}).then(function(addWorkout) {
        res.json(addWorkout);
    })
        .catch(function(err) {
        res.json(err);
        });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.update(
        { id: req.params.id }, 
        { $push: { exercises: req.body } 
    })
        .then(function(addToWorkout) {
        res.json(addToWorkout);
        })
        .catch(function(err) {
        res.json(err);
        });
  });
};
