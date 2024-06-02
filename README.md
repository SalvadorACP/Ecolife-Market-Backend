# Instrucciones de Ejecución del Backend

Este proyecto utiliza Node.js, Express y MongoDB para el backend. A continuación, se describen los pasos para instalar y ejecutar el backend en tu entorno local.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (Node Package Manager)
- MongoDB (puedes usar MongoDB Atlas para una base de datos en la nube o instalar MongoDB localmente)
- Virtual Studio Code

## Instalación

### Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```sh
git clone https://github.com/SalvadorACP/Ecolife-Market-Backend.git
cd tu-repositorio
```
Instala las dependencias 

```sh
npm install
```

Despues ejecuta el archivo (populateDB.js) en la terminal dentro del directorio donde este alojado el proyecto

```sh
node populateDB.js
```
Esto creara una base de datos en mongo y poblará la base de datos con 10 productos

Despues entra al entorno de desarrollo para levantar el backend

```sh
npm run dev
```

