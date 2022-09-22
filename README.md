# Lab - 03 basic-api-server


## Author: Keelen Fisher

## Notes from ReadMe file in 401 Repo

### CRUD Operations with REST and Express

- CREATE
  - `app.post('/resource')`
- READ All / LIST
  - `app.get('/resource')`
- READ One
  - `app.get('/resource/:id')`
- UPDATE
  - `app.put('/resource/:id')`
- DESTROY
  - `app.delete('/resource/:id')`

### Route Modules

- Normal node modules
- Require express just like your server
- Instantiate `express.router` instead of `express()`
- Export the route definitions
- The main server/app should require your route an then `use()` them
  - The server can prefix imported routes

### psql cli commands

- list databases:  `\l`
- quit: `\q`
- change collection (use different DB): `\c database-name`
- show database tables: `\dt`
- show all contents of database: `\d`
- see contents of table:  `SELECT * FROM "customers";`
- another see contents of table: `TABLE "customers";`

#### Tests

- `psql` to test the database
- `nodemon`
- `npm test`
- `/person`
- `/nintendo`
- `/food`

- Deployed Site:

- [Github repo:](https://github.com/Keelen-Fisher/basic-api-server)

- [Deployed Site:](https://keelen-basic-api-server-prod.herokuapp.com/)

- [PR From Github:](https://github.com/Keelen-Fisher/basic-api-server/pull/3)

#### UML

Created with [miro](https://miro.com/app/board/uXjVPVbmw2E=/)

- UML for lab 03: ![UML 3](UML%20Draft%20for%20Lab%2003.png)
