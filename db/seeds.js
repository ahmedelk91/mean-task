//requires mongoose dependencies
var mongoose = require("mongoose")

//connects to the tasks database in mongo
var conn = mongoose.connect("mongodb://localhost/tasks")

//require our model definition we defined earlier
var TaskModel = require("../models/task")

//removes any existing tasks from the database
TaskModel.remove({}, function(err){
})

//instantiates 6 tasks in memory(but not saved yet) and shoves them into arrays

var task1 = new TaskModel({title: "Study the MEAN Stack", description: "All day, every day"})
var task2 = new TaskModel({title: "Take my cat to the vet", description: "Appointment on 09/02/16 at 8:00PM"})
var task3 = new TaskModel({title: "Pay student loan", description: "Payment due end of the month"})
var task4 = new TaskModel({title: "Schedule dentist appointment", description: "Any weekend at 12PM"})
var task5 = new TaskModel({title: "Buy cat food", description: "Penelope's favorite, Fancy Feast!"})
var task6 = new TaskModel({title: "Take ring to Mordor", description: "Drop in lava of Mt. Doom"})

var tasks = [task1, task2, task3, task4, task5, task6]

//iterate through the tasks to save them to the database
for(var i = 0; i < tasks.length; i++){
  tasks[i].save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("task was saved")
    }
  })
}

console.log('wat')
