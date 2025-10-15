# PracticaInformacionRutas

Proyecto de práctica para manejo de rutas y CRUD en memoria (usuarios).

Pasos para ejecutar:

1. Abrir una terminal en la carpeta `practicas/PracticaInformacionRutas`.
2. Instalar dependencias:

```powershell
npm install
```

3. Iniciar el servidor:

```powershell
npm start
```

El servidor escucha por defecto en http://localhost:4000 y expone las rutas bajo `/api`:

- GET  /api/usuarios          -> obtener todos (acepta query: nombre, edad)
- GET  /api/usuarios/:id      -> obtener usuario por id
- POST /api/usuarios          -> crear usuario (JSON { nombre, edad })
- DELETE /api/usuarios/:id    -> eliminar usuario por id

Ejemplos con curl:

```powershell
curl http://localhost:4000/api/usuarios
curl "http://localhost:4000/api/usuarios?nombre=ana"
curl http://localhost:4000/api/usuarios/3
curl -X POST http://localhost:4000/api/usuarios -H "Content-Type: application/json" -d "{\"nombre\":\"Nuevo\",\"edad\":20}"
curl -X DELETE http://localhost:4000/api/usuarios/5
```
