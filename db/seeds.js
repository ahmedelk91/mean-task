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

var task1 = new TaskModel({body: "Study the MEAN Stack"})
var task2 = new TaskModel({body: "Take my cat to the vet"})
var task3 = new TaskModel({body: "Pay student loan"})
var task4 = new TaskModel({body: "Schedule dentist appointment"})
var task5 = new TaskModel({body: "Buy cat food"})
var task6 = new TaskModel({body: "Take ring to Mordor"})

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
