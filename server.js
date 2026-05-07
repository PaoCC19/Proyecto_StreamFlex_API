const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. Conectar a la base de datos
conectarDB();

// 2. Middlewares (Preparar el servidor)
app.use(cors());
app.use(express.json()); // Permite que el servidor entienda datos en formato JSON

// 3. RUTAS: Aquí conectamos lo que acabas de crear
app.use('/api/peliculas', require('./routes/peliculaRoutes'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});