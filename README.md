

# Foro Multitemático

El **Foro Multitemático** es una aplicación web que permite a los usuarios crear y compartir publicaciones sobre una variedad de temas en un entorno individual y aislado. Cada publicación puede incluir un título descriptivo, contenido informativo y un enlace a una imagen relacionada.

## Configuración del Proyecto

### Requisitos Previos

Asegúrate de tener instalados los siguientes componentes en tu sistema:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/) 

### Pasos para Configurar el Proyecto

1. Clona este repositorio en tu máquina local:

   ```shell
   git clone https://github.com/DiegojF147/comision-A-Diego-Fernandez.git
   ```

2. Navega hasta la carpeta del proyecto:

   ```shell
   cd foro-multitematico
   ```

3. Instala las dependencias del proyecto:

   ```shell
   npm install
   ```

4. Configura la base de datos en el archivo `src/config/database.js`. Asegúrate de proporcionar la información de tu base de datos MySQL.

   ```javascript
   import { Sequelize } from 'sequelize';

   export const sequelize = new Sequelize('nombre_de_la_base_de_datos', 'usuario', 'contraseña', {
       host: 'localhost',
       dialect: 'mysql',
   });

   export const startDb = async () => {
       try {
           await sequelize.authenticate();
           await sequelize.sync();
           console.log('Conexión establecida con éxito a la base de datos.');
       } catch (error) {
           console.error('No se pudo conectar a la base de datos:', error);
       }
   };
   ```

5. Ejecuta la aplicación:

   ```shell
   npm start
   ```

6. La aplicación estará disponible en `http://localhost:3000/posts`.

## Uso de la Aplicación

- Para crear una nueva publicación, haz clic en el botón "NUEVO POST" en la página principal.
- Completa el formulario con el título, contenido y, opcionalmente, un enlace a una imagen.
- Haz clic en "Guardar" para crear la publicación.
- Las publicaciones existentes se mostrarán en la página principal y se pueden editar o eliminar según sea necesario.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de ejecución de JavaScript del lado del servidor.
- **Express**: Framework web de Node.js para crear aplicaciones web robustas.
- **Sequelize**: ORM (Object-Relational Mapping) para interactuar con la base de datos MySQL.
- **EJS**: Motor de plantillas para generar las vistas HTML.
- **Bootstrap**: Framework de diseño para crear una interfaz de usuario atractiva y responsiva.



