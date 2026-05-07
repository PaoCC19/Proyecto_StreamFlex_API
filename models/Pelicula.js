const mongoose = require('mongoose');

const PeliculaSchema = new mongoose.Schema({
    titulo: { type: String, required: true, trim: true },
    genero: { type: String, required: true },
    año: { type: Number, required: true },
    director: { type: String, required: false },
    sinopsis: { type: String, required: false }
}, {
    timestamps: true 
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);