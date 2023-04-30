const mongoose = require("mongoose");


const instaSchema = new mongoose.Schema({
    name : String,
    likes :Number,
    post : Number,
    comments : String,
    suggestions : String,
});
 const instamodel = mongoose.model("insta", instaSchema);
 module.exports = instamodel;