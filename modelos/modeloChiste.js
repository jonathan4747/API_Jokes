const mongoose = require ('mongoose');

const SchemaChiste = new mongoose.Schema({
    id: Number,
    pregunta: String,
    respuesta: String
})

const Chiste = mongoose.model('chistes',SchemaChiste);
module.exports=Chiste;