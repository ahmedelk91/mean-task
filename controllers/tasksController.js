var mongoose = require('../db/schema.js')
//requires model definitions
var TaskModel = require("../models/task.js")
console.log("working")
//instantiates a tasksController which will contain all of the controller actions
var tasksController = {
  //the index action will make a DB query to find all task documents in our task collection, when it does it will render the tasks/index view and pass the task objects to the template
  index: function(req, res){
    TaskModel.find({}, function(err, docs){
      res.render("tasks/index", {tasks: docs})
    })
  }
}

//exports the controller so we can use the file as the controller.
//re: index.js: var tasksController = require("./controllers/tasksController")
module.exports = tasksController;
