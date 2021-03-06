//express dependency for our application
var express = require("express")
//loads mongoose dependency
var mongoose = require("mongoose")
//loads dependency for middleware for parameters
var bodyParser = require("body-parser")
//loads dependency that allows put and delete where not supported in html
var methodOverride = require("method-override")
//loads module containing all tasks controller actions
var tasksController = require("./controllers/tasksController")
//connect mongoose interfaces to tasks mongo db
mongoose.connect("mongodb://localhost/tasks")
//invokes express dependency and sets namespace to application
var app = express()
//sets view engine to handlebars
app.set("view engine", "hbs")
//allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//allows for put/delete request in html form
app.use(methodOverride("_method"))
//connects assets like stylesheets
app.use(express.static(__dirname + "/public"))

//app server located on port 4000
app.listen(4000, function(){
  console.log("app listening on port 4000")
});

//routes for all requests to this express app that map to an action/function in the tasksController
app.get("/", tasksController.index)
app.get("/tasks", tasksController.index)
//routes to new and show
app.get("/tasks/new", tasksController.new)
app.get("/tasks/:id", tasksController.show)
app.post("/tasks", tasksController.create)
app.get("/tasks/:id/edit", tasksController.edit)
app.put("/tasks/:id", tasksController.update)
app.delete("/tasks/:id", tasksController.delete)
