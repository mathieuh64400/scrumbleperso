const mongoose = require("mongoose");

const schema = mongoose.Schema({
	titre: String,
    contenu: String,
    img: String,
    texte:String,
    video:String
})

module.exports = mongoose.model("Regles", schema)