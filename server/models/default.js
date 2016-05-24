var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// TODO enter min and max values.

var Default_Values = new Schema({

      bio: {type: String},
      coreBeliefs: {type: String},
      development: {type: String},
      interests: {type: String}

});

module.exports = mongoose.model("Default_Values", Default_Values);
