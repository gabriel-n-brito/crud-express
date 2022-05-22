var mongoose = require("mongoose");

var ProfessorSchema = mongoose.Schema({
  name: { type: String, required: true, max: 200 },
  university: { type: String, required: true, max: 200 },
  degree: { type: String, required: true, max: 100 },
});

var ProfessorModel = mongoose.model("professores", ProfessorSchema);

module.exports = ProfessorModel;