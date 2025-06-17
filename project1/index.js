const express = require("express");
const PORT = 3000;
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/school")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.get("/students", (req, res) => {
  student
    .find()
    .then((students) => {
      console.log("Students:", students);
      const array = () => {
        for (let i = 0; i < students.length; i++) {
          res.write(
            "name: " + students[i].name + ", score: " + students[i].score + "\n"
          );
        }
        res.end();
        return "Data sent successfully";
      };
      array();
    })
    .catch((error) => {
      console.error("Error fetching students:", error);
    });
});

const student = mongoose.model(
  "Student",
  {
    name: String,
    score: Number,
  },
  "student"
);
// Middleware to parse JSON bodies
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
