# PracticaInformacionRutas - Documentación

Este proyecto contiene una práctica de rutas en Express con un array `usuarios` en memoria.

Cómo ejecutar:

```powershell
cd practicas\PracticaInformacionRutas
npm install
npm start
```

Endpoints:
- GET /api/usuarios  -> lista todos; soporta querys: ?nombre= & ?edad=
- GET /api/usuarios/:id -> obtiene por id
- POST /api/usuarios -> crea usuario (body JSON { nombre, edad })
- DELETE /api/usuarios/:id -> elimina usuario

Ejemplos curl:

```bash
curl http://localhost:4000/api/usuarios
curl "http://localhost:4000/api/usuarios?nombre=ana"
curl -X POST http://localhost:4000/api/usuarios -H "Content-Type: application/json" -d '{"nombre":"Nuevo","edad":20}'
```

Notas:
- Datos en memoria.

*** End Patch