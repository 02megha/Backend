const express = require("express");
//const mongoose = require("mongoose");
const app = express();

const {connectDatabase} = require("./connections/connection")

const family_Model = require("./models/family");

 app.use(express.json()); // here we start our apis under the connection of the 
 // the data base in the server of the database after connecting our data
 // database to the server 
 
 app.post("/api/familydata" ,async (req,res) =>{
  try{
    // console.log(req.body);
  // here we use req.boy.-----  mother : String,
  
const dbObject1={
  mother : req.body.mothers_name_,
    houseno : req.body.home_no,
    father : req.body.fathers_name,
    children : req.body.child,
    contactno : req.body.phone_no,
}
const familyData = new family_Model(dbObject1);
await familyData.save();
  
//  // console new object

 return res.json({ success: true, message: "Data saved succesfully"});
}
catch (error) {
  console.log(error);

  return res.status(400).json({ success: false, error: error.message
  });
}
 });


//  const food_Model = require("./models/food");

// //  app.use(express.json());

//  app.post("/api/fooddata" ,async (req,res) =>{
//   try{
//     // console.log(req.body);
//   // here we use req.boy.-----  mother : String,
  
// const newobject = {
//   company : req.body.brand_name,
//     workers : req.body.staff_count,
//     sales : req.body.profit_attained,
//     ceo : req.body.officials_included,
//     manager : req.body.controller_name,
// }
// const foodData = new food_Model(newObject);
// await foodData.save();
  
// //  // console new object

//  return res.json({ success: true, message: "Data saved succesfully"});
// }
// catch (error) {
//   console.log(error);

//   return res.status(400).json({ success: false, error: error.message
//   });
// }
//  });







    const a =  connectDatabase();
    console.log(a);
      const PORT = 6000;
app.listen(PORT, async()=>{
    console.log(`server is runnig at port ${PORT}`);
})
    
 
// alwayas put app.listen in th last of the entire code of 
// the system 
//mongodb is a collection of the data  of the same kind /type
 //specific data in the left side of the file is to be s
 //stored in the data base 
 // once the fields are added in the database the can never
 //be changed
 //har ek data ya collection for nay data we need different
 //database 
 //. first in the connection folder in the backend
 //make connection file which should contain the connection code required to connect the server
 // then in the index file write the code to import the coonection file in it
 // the write the conecting and importing codes 
 // the write  the data that is to be used  in it for 
 // write the calling codes for the connection of the database
 // model.js contains all the modells that are to be connected in the db
 //run the api in the postman
 // use async and await for server if ruuning late then the next code can run till its in the previous is in the loading phase
 // use try catch toh find the exact error in your code
 
