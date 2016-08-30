require("../db/schema")
var mongoose = require("mongoose")

var TaskModel = mongoose.model("Task")
module.exports = TaskModel

//In these files we're exporting the functionality of these mongoose models so that the file can act as the model definition. With these model definitions, we now have an interface that maps documents in our mongoDB to objects in our application.  
