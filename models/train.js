const mongoose = require("mongoose");


const trainSchema = new mongoose.Schema({
    name : String,
    trainno :Number,
    pnr : Number,
    from : String,
    To : String,
    Arrivaltime : Number,
});
 const instamodel = mongoose.model("train", instaSchema);
 module.exports = trainmodel;