//requiring mongoose dependency
var mongoose = require("mongoose")

//instantiate a name space for the Schema constructor defined by mongoose
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId

//defining schema for tasks
var TaskSchema = new Schema({
  title: String,
  description: String
})

//setting model in mongoose utilizing schema defined above; used frequently throughout this app

mongoose.model("Task", TaskSchema)
//module is an example of node aka modular code. Modularity in node is enforced best practice
module.exports = mongoose;
