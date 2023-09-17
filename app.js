const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));



   mongoose.connect("mongodb://127.0.0.1:27017/studentDB");
  const studentschema=new mongoose.Schema({
    name: String,
    mobile_no: Number,
    rollNumber: String,
    year:Number,
    branch:String,
    
  },
  {collection:'databasee'});

  const studentmodel=mongoose.model('databasee',studentschema);


  app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.htm");
  });



  
  app.post('/', async (req, res) => {
    const rollNumber = req.body.rollNumber;
    const student = await studentmodel.findOne({ rollNumber });
    if (student) {
      res.send(`<p>Name: ${student.name}</p><p>Phone Number: ${student.mobile_no}</p><p>Branch: ${student.branch}</p><p>Year: ${student.year}</p>`);
    } else {
      res.send('Student not found.');
    }
  });
  

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
