const express = require('express');
const { Estados } = require('./backend/estados');
const { obtenerDiezPares } = require('./backend/n_iguals');
const { sonNumerosIguales, esPrimo } = require('./backend/primos');

const app = express();

// Middleware global: registra cada solicitud
app.use((req, res, next) => {
  console.log('SE HA REALIZADO UNA SOLICITUD:', req.method, req.url);
  next();
});

// Rutas de ejemplo
app.get('/estados', (req, res) => {
  res.json({ estados: Estados });
});

app.get('/pares', (req, res) => {
  res.json({ pares: obtenerDiezPares() });
});

app.get('/primo/:n', (req, res) => {
  const n = Number(req.params.n);
  res.json({ n, esPrimo: esPrimo(n) });
});

// Ruta que directamente responde 503 y mensaje de mantenimiento
app.get('/mantenimiento', (req, res) => {
  res.status(503).json({ message: 'SERVIDOR EN MANTENIMIENTO' });
});

// Ruta que lanza un error para probar el manejador de errores
app.get('/cause-error', (req, res, next) => {
  const err = new Error('servidor en mantenimiento');
  err.status = 503;
  next(err);
});

// Manejador de errores centralizado
app.use((err, req, res, next) => {
  if (err && (err.status === 503 || /mantenimiento/i.test(err.message))) {
    return res.status(503).json({ message: 'SERVIDOR EN MANTENIMIENTO' });
  }
  console.error(err);
  res.status(500).json({ message: 'ERROR INTERNO' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
