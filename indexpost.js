const express = require('express');
const app = express();
// const  { connectDatabase } = require("./connections/connection");
//const USER_MODEL = require("./models/users");



app.use(express.json());

  app.post("/user", (req, res) => {
    try{

    
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.class);
    return res.json({success: true,message: "testing"});

    
    } catch(error){
  return res.status(400).json({success:false, error: error.message});
    }
});

// api no.2


app.post("/places", (req, res) => {
  try{

  
  console.log(req.body);
  console.log(req.body.country);
  console.log(req.body.state);
  return res.json({success: true,message: "testing"});

  
  } catch(error){
return res.status(400).json({success:false, error: error.message});
  }
});





app.post("/friends", (req, res) => {
  try{

  
  console.log(req.body);
  console.log(req.body.first);
  console.log(req.body.second);
  console.log(req.body.third);
  console.log(req.body.fourth);
  console.log(req.body.fifth);
  return res.json({success: true,message: "testing"});

  
  } catch(error){
return res.status(400).json({success:false, error: error.message});
  }
});
const port=8000;

// app.listen(port ,()=> {
//   console.log('server is running at port ${port}');
// });

app.post("/api/data", (req, res)=> {
  try{
    console.log(req.body);

    // creating a new object 
    //new object is same as the data is stored in the database the new values are added because so that it is required by the frontend 
    const newobject = {
      username: req.body.name,
      userbatch: req.body.batch,
userbranch: req.body.branch,
usercgpa: req.body.cgpa,
usersubject: req.body.maths,
    };
console.log(newobject);
//mongodb stores data in the form of key which remains constant 
//in the left side for all the documents
return res.json({success: true, message: "testing submit api"});
  } catch (error){
    return res.status(400).json({ success: false, error: error,message});
  }

});






app.post("/api/news", (req, res) => {
  try{

  
  console.log(req.body);
  console.log(req.body.tittle);
  console.log(req.body. cataogary);
  console.log(req.body.discription);
  console.log(req.body. date);
  console.log(req.body.source);
  console.log(req.body.views);

  return res.json({success: true,message: "testing"});

  
  } catch(error){
return res.status(400).json({success:false, error: error.message});
  }
});



app.post("/api/submithisbiodata", (req, res) => {
  try{

  
  console.log(req.body.name);
  console.log(req.body.birthdate);
  console.log(req.body. address);
  console.log(req.body.phonenumber);
  console.log(req.body.hobbies);
  console.log(req.body.linkedin);
  console.log(req.body.githubid);
  console.log(req.body.email);

  return res.json({success: true,message: "testing"});

  
  } catch(error){
return res.status(400).json({success:false, error: error.message});
  }
});


// connectDatabase();
const PORT = 8000;
  app.listen(PORT, ()=>{
    console.log("server is running at port", PORT);
  });

