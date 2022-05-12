# Semana 5 Aplicacion Cliente Servidor

Se desarrolla aplicacion en la que so pone en practica el uso de base de datos, uso de dependencias y creacion de API para consumir los datos.

Se usa base de datos creada en PostgresSQL.

## Base de datos

Se creo la base de datos `explorers_api` con la siguiente estructura. 

Tabla Explorers: 

| Nombre             | Tipo de dato |
| ------------------ | ------------ |
| id                 | Int          |
| name               | String       |
| username           | String       |
| mission            | String       |
| azureCertification | Boolean      |
| dateCreated        | DateTime     |
| lastUpdated        | DateTime     |

En el archivo `.env` se cambian los datos de usuario y contrasena de tu base de datos. 

## Dependencias utilizadas

- Express: para crear el servidor local.
- Prisma: es usada para la conexion a la base de datos, asi como tambien nos permite agregar nuevos modelos a nuestra base de datos sin necesidar de interactuar directamente con ella.

npx: al igual que npm nos ayuda a la instalacion y gestion de dependencias, pero sin instalar paquetes globales.
