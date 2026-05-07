const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();


conectarDB();


app.use(cors());
app.use(express.json()); 


app.use('/api/peliculas', require('./routes/peliculaRoutes'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});