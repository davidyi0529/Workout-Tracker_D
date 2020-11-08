const db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(workouts) {
        res.json(workouts);
    })
        .catch(function(err) {
        res.json(err);
        });
  });

  app.post("/api/workouts", function(req, res) {
    db.Workout.create({}).then(function(newWorkout) {
        res.json(newWorkout);
    })
        .catch(function(err) {
        res.json(err);
        });
  });

  app.put("/api/workouts/:workout", function({ params, body }, res) {
    db.Workout.findOneAndUpdate( params.id, { 
        $push: { exercises: body } 
        },{ 
        new: true 
        })
          .then(function(updatedWorkout){
            res.json(updatedWorkout); 
          })
            .catch(function(err) {
              res.json(err);
            });
        });
};
