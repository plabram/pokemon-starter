# "PokeFiltro" - Prueba Técnica Adalab

¡Bienvenid@ a PokeFiltro! Si eres fan de los pokemon, te alegrarás de saber que ahora puedes encontrar toda la información que necesitas sobre ellos en el mismo lugar. Y además, que este lugar es más eficaz que un ataque de relámpago ⚡️

## Instalación
Para ver el proyecto en marcha, tienes dos opciones:
1. Descargar y arrancar en local el código de las dos ramas principales: [main-front](https://github.com/plabram/adalab/tree/main-front) | [main-back](https://github.com/plabram/adalab/tree/main-back)
2. Visitar las siguientes webs: [frontend](https://pokemon-filters.netlify.app/) | [backend](https://pokeapi-backend-3bla.onrender.com/api/pokemon/)

> [!TIP]
> El backend usa environment variables. Tendrás que crear un `MONGO_URL`(no dudes en pedir el mío sino) y subirlo a tu hosting.

## Endpoints
* GET todos los pokemon: `/api/pokemon/`
    * Este endpoint soporta el uso de query params para filtrar por nombre. Es decir, `/api/pokemon/?name=charmander` devolverá información sobre Charmander.
* GET pokemon por id: `/api/pokemon/:id`

## Información técnica
### Stack:
* JavaScript
* React
* React Router
* Node.js
* Express
* MongoDB
* Mongoose
* [Dotenv](https://www.npmjs.com/package/dotenv)
* SASS
* Netlify / Render

### Decisiones:
* Filtrar en el front o el back?
  * Para un proyecto pequeño React (**frontend**) puede gestionar sin problemas el filtraje sin afectar al performance.
  * El backend está preparado para soporter filtraje con query params si se necesitara.
* React o JavaScript "vanilla"?
  * El proyecto usa React, aunque no es necesario para un proyecto de este tamaño.
  * Si el proyecto creciera, React aportaría legibilidad, modularidad y gestión de estados.
* MongoDB o MySQL?
  * MySQL habría sido una buena opción aquí debido al ID secuencial (1, 2, 3, 4, 5) que vemos en la interfaz.
  * Sin embargo, **MongoDB** es perfectamente funcional, y el "equipo de desarrollo" (yo 😊) tiene mayor experiencia con ello (también con PostgreSQL, pero no se enseña en Adalab).
  * Para compensar se ha añadido un campo manual, `friendlyId`.

### Out of scope
Lo siguiente no se ha incluido por motivos del tiempo, pero podría ser interesante en el futuro. 
No dudes en preguntarme cómo se realizaría.
* Añadir el `friendlyId` a MongoDB de manera programática con Node.js
* Unit testing
* Protección del servidor con rate limits, debounce, etc.
* Performance:
  * Lazy loading
  * Memoization
  * Pagination de los resultados del servidor
* Pantalla de carga y de 404

Que disfrutes del proyecto, y ¡hazte con todos!

&copy; Penelope Labram 2023
