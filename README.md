# HpUp-Backend

## Database

All Migration and Models generate by sequelize-cli

### Mirgation

#### to create a database

`npx sequelize-cli db:migrate`\

#### to rollback all migration (clean database)

`npx sequelize-cli db:migrate:undo:all`\

### Run seeds

`npx sequelize-cli db:seed --seed 20210124111220-usertype`\
`npx sequelize-cli db:seed --seed 20210124111153-user`\

### Inspiration and docs

[https://stackoverflow.com/questions/46357533/how-to-add-delete-new-columns-in-sequelize-cli]\
[https://github.com/danielfsousa/express-rest-boilerplate]\
[https://github.com/binitghetiya/express-sequelize-api-boilerplate]\
[https://github.com/joshuaalpuerto/node-ddd-boilerplate]\

**Migrations and models**

(sequelize comand line manual)[https://www.npmjs.com/package/sequelize-cli]
[https://dev.to/anayooleru/modifying-an-existing-sequelize-migration-1mnn]\
[https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7]\
[https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554]\

**sequelize docs**
[https://sequelize.org/v3/]
