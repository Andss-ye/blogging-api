# Blogging API

## Descripción
Blogging API es una API RESTful diseñada para gestionar un sistema de blogs. Permite a los usuarios crear, leer, actualizar y eliminar publicaciones, además de manejar autenticación y comentarios.

## Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB con Mongoose (o cualquier otra base de datos que prefieras)
- JSON Web Tokens (JWT) para autenticación

## Instalación
1. Clona este repositorio:
   ```sh
   git clone https://github.com/tu_usuario/blogging-api.git
   ```
2. Accede al directorio del proyecto:
   ```sh
   cd blogging-api
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Crea un archivo `.env` con las siguientes variables de entorno:
   ```env
   PORT=5000
   MONGO_URI=tu_conexion_mongodb
   JWT_SECRET=tu_secreto_jwt
   ```
5. Inicia el servidor:
   ```sh
   npm start
   ```

## Endpoints
### Autenticación
- `POST /api/auth/register` → Registrar un usuario
- `POST /api/auth/login` → Iniciar sesión y obtener un token

### Usuarios
- `GET /api/users/:id` → Obtener información de un usuario
- `PUT /api/users/:id` → Actualizar información de un usuario
- `DELETE /api/users/:id` → Eliminar un usuario

### Publicaciones
- `GET /api/posts` → Obtener todas las publicaciones
- `GET /api/posts/:id` → Obtener una publicación por ID
- `POST /api/posts` → Crear una nueva publicación (requiere autenticación)
- `PUT /api/posts/:id` → Actualizar una publicación (requiere autenticación)
- `DELETE /api/posts/:id` → Eliminar una publicación (requiere autenticación)

### Comentarios
- `POST /api/posts/:id/comments` → Agregar un comentario a una publicación.
- `GET /api/posts/:id/comments` → Obtener comentarios de una publicación.

Hecho para: 
https://roadmap.sh/projects/blogging-platform-api
