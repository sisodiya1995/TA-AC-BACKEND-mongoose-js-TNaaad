var mongoose = require("mongoose");
var schema = mongoose.Schema;

var addressSchema = new Schema(
  {
    village: String,
    city: { type: String, require: ture },
    state: { type: String, require: true },
    pin: { type: String, minlength: 5 },
    user: schema.types.ObjectId,
  },

  { timestamps: true }
);

module.exports = mongoose.Model('Adsress' ,addressSchema)