
const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1:27017/ofppt";

connection().catch((err) => console.log(err));

async function connection() {
  await mongoose.connect(mongoDB);
}

const Schema = mongoose.Schema;

const Stagiaire = new Schema({
  Nom: String,
  Prenom:String,
  CIN:String,
  Email:String,
  Tel:String,
  Date: Date,
  Filiere:Object,
  Groupe:Object
});

