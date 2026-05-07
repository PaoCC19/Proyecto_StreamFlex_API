const Pelicula = require('../models/Pelicula');

// GET: Obtener todas las películas
exports.obtenerPeliculas = async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.json(peliculas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al obtener datos' });
    }
};

// POST: Crear una nueva película
exports.crearPelicula = async (req, res) => {
    try {
        const nuevaPelicula = new Pelicula(req.body);
        await nuevaPelicula.save();
        res.status(201).json({ msg: 'Película creada', nuevaPelicula });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al guardar la película' });
    }
};

// PUT: Actualizar una película
exports.actualizarPelicula = async (req, res) => {
    try {
        const peliculaEditada = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(peliculaEditada);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar' });
    }
};

// DELETE: Eliminar una película
exports.eliminarPelicula = async (req, res) => {
    try {
        await Pelicula.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Película eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al eliminar' });
    }
};