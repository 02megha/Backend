const express = require("express");
// creating server
const app = express();


app.listen(8000, () => {
    console.log("server is running at port 8000");
});
 

app.get("/photos",(req, res) =>{
    return res.json({message: "photos"});
});
 
app.get("/user",(req, res) =>{
    return res.json({message: "users"});
});

app.get("/megha",(req, res) =>{
    return res.json({message: "megha"});
});

app.get("/ece",(req, res) =>{
    return res.json({message: "ece"});
});

app.get("/shikha",(req, res) =>{
    return res.json({message: "shikha mathur is my sister and she is doing preperations"});
});


app.get("/family",(req, res) =>{
    return res.json({message: "family means to help and support everyone in need viva deed"});
});

app.get("/study",(req, res) =>{
    return res.json({message: "studyhabit is good for everyone in this era"});
});

app.get("/food",(req, res) =>{
    return res.json({message: "i like non-veg "});
});

app.get("/subject",(req, res) =>{
    return res.json({message: "subject"});
});



app.get("/colours",(req, res) =>{
    return res.json({message: "colours"});
});

app.get("/states",(req, res) =>{
    return res.json({message: "states"});
});


app.get("/data", (req, res) => {
    try{

    
    console.log(req);
    console.log(req.name);
    console.log(req.class);
    return res.json({success: true,message: "testing"});

    
    } catch(error){
  return res.status(400).json({success:false, error: error.message});
    }
});

