const mongoose = require("mongoose");


const interviewSchema = new mongoose.Schema({
    name : String,
   achivements: String,
   experience: Number,
   skills: String,
   intersted: Boolean,
});
 const instamodel = mongoose.model("interview", instaSchema);
 module.exports = interviewmodel;