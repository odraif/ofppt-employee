const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1:27017/ofppt";

connection().catch((err) => console.log(err));

async function connection() {
  await mongoose.connect(mongoDB);
}

const Schema = mongoose.Schema;

const Employees = new Schema({
  Nom: String,
  Prenom:String,
  CIN:String,
  Email:String,
  Tel:String,
  Date: Date,
  Type:String,
  Salaire:String,
  Modules:Object
});


module.exports = mongoose.model('Employees', Employees);