const express = require('express');
const app = express();

// puerto de salida
const PORT = 3000;

// restrigciones añadidas
app.use((req, res, next) => {
    console.log('Solicitud recibida por:', req.headers['user-agent']);
    next(); // Pasa la solicitud al siguiente middleware/ruta
});
app.use((req, res, next) => {
    // Establece encabezados de respuesta
    res.setHeader('Content-Type', 'text/plain');
    next(); // Pasa la respuesta al siguiente middleware/ruta
});

// vista de pagina
app.get('/', (req, res) =>{
    res.send('Hola mundo');
});

// manejo de errores
app.get('/error', (req, res, next) => {
    try {
        // Generar un error
        throw new Error('Este es un error de ejemplo');
        res.send('¡Hola, soy una respuesta que fui procesada!');

    } catch (err) {
        // Enviar una respuesta de error al cliente
        res.status(500).json({ error: 'Ocurrió un error en el servidor' });
    }
});

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    const error = new Error('Ruta no encontrada');
    error.status = 404;
    next(error);
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    // Obtener el código de estado por defecto o asignar 500 si no se proporciona
    const status = err.status || 500;

    // Enviar una respuesta de error al cliente
    res.status(status).json({ error: err.message });
});


app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT);
});