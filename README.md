# Warner Repo — Monorepo de prácticas y APIs

Este repositorio agrupa varios proyectos y ejercicios. Aquí tienes una vista general de cada carpeta, cómo ejecutarlas y qué contienen.

## Índice rápido

- TeoriasInformacionRutas — API Node/Express con JWT y Swagger
- practicas/PracticaInformacionRutas — Mini API de usuarios (práctica)
- console — Ejercicios de JS en consola (módulos básicos)
- Dtos — Demos de módulos y operaciones
- express — Ejemplo simple con Express
- practic — Demos varios (EventEmitter, etc.)
- Prototipo_web — Prototipo .NET (strop_API / strop_app)

---

## TeoriasInformacionRutas (Node/Express API)

API de noticias con autenticación JWT, Swagger UI y colección de Postman.

- Ubicación: `TeoriasInformacionRutas/`
- Ejecutar:
	- Requisitos: Node.js, npm
	- Desde la carpeta: `npm install` y luego `node app.js` (o `npm start` si está definido)
	- Swagger UI: http://localhost:3000/docs
	- OpenAPI JSON: http://localhost:3000/swagger.json

### Endpoints principales (base /api)

- POST /auth/login — Devuelve { token } (acepta { email/password } o { correo/contraseña })
- POST /auth/registro — Crea usuario (en memoria)
- GET /news — Lista noticias
- GET /news/{id} — Obtiene noticia
- POST /news — Crear noticia (JWT)
- PUT /news/{id} — Actualizar noticia (JWT)
- DELETE /news/{id} — Eliminar noticia (JWT + admin)
- GET /categories — Listar categorías; POST /categories — Crear
- GET /states — Listar estados; POST /states — Crear
- GET /usuarios — Listar usuarios
- DELETE /usuarios/{id} — Borrar usuario (JWT; admin o propietario)

Notas importantes:
- IDs de noticias: siempre enteros incrementales. El servidor ignora `id` en POST y no permite cambiarlo en PUT.
- JWT: usa el botón Authorize en Swagger y pega `Bearer <token>` si es necesario.

Documentación extendida: ver `TeoriasInformacionRutas/README.md`.

---

## practicas/PracticaInformacionRutas

Mini API de usuarios para practicar rutas.

- Ubicación: `practicas/PracticaInformacionRutas/`
- Ejecutar: `npm install` y `node app.js` (puerto 4000 por defecto).
- Rutas: `routes/UserRoute.js` (GET lista, GET por id, POST crear, DELETE por id)

Más info: ver `practicas/PracticaInformacionRutas/README.md` y `README_full.md`.

---

## console

Ejercicios de Node en consola con módulos simples.

- Ubicación: `console/`
- Ejecutar: `node app.js`
- Módulos en `console/backend/`:
	- `primos.js` — utilidades para primos y comparación
	- `n_iguals.js` — generador de pares
	- `estados.js` — listado de estados

Más info: ver `console/README.md`.

---

## Dtos

Pequeños ejemplos de módulos y operaciones.

- Ubicación: `Dtos/`
- Archivos:
	- `operaciones.js` — suma, resta (exports)
	- `app.js` — ejemplo de uso

---

## express

Proyecto mínimo con Express (demo).

- Ubicación: `express/`
- Ejecutar: `npm install && node express_app.js`

---

## practic

Ejercicios varios (por ejemplo, EventEmitter).

- Ubicación: `practic/`
- Ejecutar: `node app.js`

---

## Prototipo_web (.NET)

Prototipo en .NET con API y app.

- Ubicación: `Prototipo_web/`
- Subcarpetas:
	- `strop_API/` — proyecto .NET con sln/csproj y documentación
	- `strop_app/` — (estructura de app)
- Ejecutar API: abrir solución en Visual Studio o `dotnet run` en `strop_API/`.

---

## Cómo contribuir / notas

- Este repo contiene subproyectos independientes; instala dependencias y ejecuta dentro de cada carpeta.
- Para evitar conflictos de puerto, cambia `PORT` vía variables de entorno.
- Si ves errores de `MODULE_NOT_FOUND`, ejecuta `npm install` en la carpeta del proyecto correspondiente.

## Publicación en GitHub

Para subir este repositorio a `J0w3-Us/warner-repo`:

1) Inicializa (si no hay .git en la raíz):
	 - `git init`
	 - `git add .`
	 - `git commit -m "chore: initial import"`

2) Agrega el remoto y sube ramas:
	 - `git remote add origin https://github.com/J0w3-Us/warner-repo.git`
	 - `git branch -M main` (o master según tu preferencia)
	 - `git push -u origin main`

Notas:
- Hay carpetas con su propio `.git` (por ejemplo, `TeoriasInformacionRutas/.git` y `Prototipo_web/strop_API/.git`). Si quieres un monorepo limpio, elimina esos sub-repos o consolídalos antes de empujar:
	- Elimina `.git/` dentro de cada subcarpeta (si no quieres mantenerlos como submódulos).
	- Alternativamente, conviértelos en submódulos: `git submodule add <url> <ruta>`.

Si prefieres, puedo automatizar los comandos de git aquí mismo y dejar todo empujado (necesitaré que inicies sesión/autorices Git en tu máquina). 
# warner-repo
