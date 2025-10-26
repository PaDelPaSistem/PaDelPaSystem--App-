// 1. IMPORTAR LIBRERÍAS CLAVE
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Configurar dotenv para cargar variables de entorno (como la URL de la DB)
dotenv.config();

// 2. CONFIGURACIÓN INICIAL DEL SERVIDOR
const app = express();
const PORT = process.env.PORT || 5000; // El puerto de tu servidor
// Usamos el valor de .env, o el valor por defecto si no existe
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/carniceria_db'; 

// 3. MIDDLEWARES (HERRAMIENTAS)
app.use(cors()); // Permite que el frontend (web/móvil) se conecte
app.use(express.json()); // Permite que el servidor entienda datos JSON

// 4. CONEXIÓN A MONGODB
mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB Conectado: Conexión exitosa a la base de datos.'))
    .catch(err => {
        console.error('❌ Error de Conexión a MongoDB:', err.message);
        // Si hay un error, el servidor se cerrará
        process.exit(1); 
    });

// 5. RUTA DE PRUEBA (ENDPOINT)
// Esta es la primera dirección que probarás para saber si el servidor funciona.
app.get('/', (req, res) => {
    res.send('API de PaDelPaSistem@: Servidor en Ejecución. ¡Todo listo para construir!');
});

// 6. INICIAR EL SERVIDOR
app.listen(PORT, () => {
    console.log(`🚀 Servidor Express iniciado en el Puerto: ${PORT}`);
    console.log(`URL de Acceso: http://localhost:${PORT}`);
});