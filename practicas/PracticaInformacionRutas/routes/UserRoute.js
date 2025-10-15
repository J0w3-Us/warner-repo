const express = require('express');
const api = express.Router();

// Arreglo en memoria con 5 usuarios iniciales
let usuarios = [
  { id: 1, nombre: 'Math Jhon', edad: 25 },
  { id: 2, nombre: 'Ana Ruiz', edad: 30 },
  { id: 3, nombre: 'Luis Perez', edad: 28 },
  { id: 4, nombre: 'María López', edad: 22 },
  { id: 5, nombre: 'Carlos Gómez', edad: 35 },
];

let nextId = usuarios.length + 1;

// Obtener todos los usuarios (con filtro opcional por query params)
api.get('/usuarios', (req, res) => {
  const { nombre, edad } = req.query;
  let result = usuarios;

  if (nombre) {
    const q = String(nombre).toLowerCase();
    result = result.filter(u => u.nombre.toLowerCase().includes(q));
  }

  if (edad) {
    const n = Number(edad);
    if (!Number.isNaN(n)) {
      result = result.filter(u => u.edad === n);
    }
  }

  res.json({ usuarios: result });
});

// Obtener un usuario por id
api.get('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = usuarios.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json({ usuario: user });
});

// Agregar un nuevo usuario
api.post('/usuarios', (req, res) => {
  const { nombre, edad } = req.body;
  if (!nombre || edad === undefined) {
    return res.status(400).json({ message: 'Faltan campos: nombre y edad son requeridos' });
  }
  const nuevo = { id: nextId++, nombre: String(nombre), edad: Number(edad) };
  usuarios.push(nuevo);
  res.status(201).json({ usuario: nuevo });
});

// Eliminar un usuario por id
api.delete('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = usuarios.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ message: 'Usuario no encontrado' });
  const removed = usuarios.splice(index, 1)[0];
  res.json({ eliminado: removed });
});

module.exports = api;
