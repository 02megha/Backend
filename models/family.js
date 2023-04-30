const mongoose = require("mongoose");
// also known as modelling//

const familySchema = new mongoose.Schema({
    mother : String,
    houseno : Number,
    father : String,
    children : String,
    contactno : Number,
});

const familymodel = mongoose.model("family", familySchema);
module.exports = familymodel;