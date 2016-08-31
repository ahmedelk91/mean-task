var mongoose = require("mongoose")
var Schema = require('../db/schema.js')
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
  },
  //in this action we'll just be rendering a view and don't need to query the database for anything
  new: function(req, res){
    res.render("tasks/new")
  },
  create: function(req, res){
    var task = new TaskModel({title: req.body.title, description: req.body.description})
    task.save(function(err){
      if(!err){
        res.redirect("/tasks")
      }
    })
  },
  //the show action we'll make a DB query to find a single task document by ID in our tasks collection, when it does it will render the tasks/new view and pass the task object to the template.
  show: function(req, res){
    TaskModel.findById(req.params.id, function(err, doc){
      res.render("tasks/show", {task: doc})
    })
  },
  edit: function(req, res){
    // the edit action will make a DB query to find a task document by ID in our
    // tasks collection, when it does it will render the tasks/edit view and pass the task object to the template
    TaskModel.findById(req.params.id, function(err, doc){
      console.log(req.params.id)
      res.render("tasks/edit", {task: doc})
    })
  },
  update: function(req, res){
    //the update action will make a DB query to find a task document by ID in the tasks collection, when it does it will set the name of the task to the value specified in the form. If it saves without error, it will redirect to the tasks show page
    TaskModel.findById(req.params.id, function(err, docs){
      docs.title = req.body.title
      console.log(req.body.title);
      docs.save(function(err){
        if(!err){
          res.redirect("/tasks/" + req.params.id)
        } else {
          console.log(req.body)
        }
      })
    })
  },
  delete: function(req, res){
    //the delete action will remove task documents by ID. If there's no error it will redirect to the task's index page
    TaskModel.remove({_id: req.params.id}, function(err){
      if(!err){
        res.redirect("/tasks")
      }
    })
  }
}

  //exports the controller so we can use the file as the controller.
  //re: index.js: var tasksController = require("./controllers/tasksController")
  module.exports = tasksController
