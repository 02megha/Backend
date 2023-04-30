const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema ({
     company : String,
     workers: Number,
     sales: Number,
     ceo: String,
     manager: String,

});
 const foodmodel = mongoose.model("food", foodSchema);

 module.exports = foodmodel;