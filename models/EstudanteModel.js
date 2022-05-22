var mongoose = require("mongoose");

var EstudanteSchema = mongoose.Schema({
  name: { type: String, required: true, max: 200 },
  course: { type: String, required: true, max: 200 },
  ira: { type: Number, required: true, max: 100 },
});

var EstudanteModel = mongoose.model("estudantes", EstudanteSchema);

module.exports = EstudanteModel;