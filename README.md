# Pokemon Starter

Welcome to Pokemon Starter! This project is a starter package for getting projects off the ground quickly and showing others how to create commonly used functionality. 

It's most suitable for eCommerce style projects that use the functionality below. I used the pokemon API for demonstration purposes, but it could be linked to any API with similar organization.

Features:
* Central list page showing all products
* Detail page for each product
* Search bar
* Animation
* Creative styling
* Fully responsive
* Full of comments to support teaching and learning

## Installing
To work with this code, you'll need both main branches: [main-front](https://github.com/plabram/adalab/tree/main-front) | [main-back](https://github.com/plabram/adalab/tree/main-back)

> [!TIP]
> The backend uses environment variables. You'll need to create a `MONGO_URL`.

## Endpoints
* GET all pokemon: `/api/pokemon/`
    * You can use query params with this endpoint to filter by name. For example, `/api/pokemon/?name=charmander` will get information about Charmander.
* GET pokemon by id: `/api/pokemon/:id`

## 📚 Stack:
* JavaScript
* React
* React Router
* SASS
* Node.js
* Express
* MongoDB
* Mongoose
* [Dotenv](https://www.npmjs.com/package/dotenv)
* Netlify / Render

&copy; Penelope Labram 2023
