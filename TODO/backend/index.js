const express = require("express");
const PORT = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/todo").then(()=>{
  console.log("Connected to MongoDB");
}).catch(()=>{
  console.error("Error connecting to MongoDB");
})

const task = mongoose.model("task",{ task: String }, "todos");

app.get("/todos", (req, res) => {
  task.find().then((retvdata)=>{
    console.log(retvdata)
    res.send(retvdata)
  })
});
app.post("/addtodos",(req,res) => {
  var newtodo = req.body.newtodo;
  const newTask = new task({ task: newtodo });
  newTask.save().then(() => {
    console.log("New todo added:", newtodo);
  });
})
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}/todos`);
});