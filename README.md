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

### Available endpoints

**_ Auth _**

Sign up \
POST http://188.166.50.249/signup \

```
{
"username": "test",
"email": "test@test.test",
"password": "123123",
"imgUrl":"",
"basedCountry":"USA",
"about":"",
"remainingDays":123,
"role":"employer",
"requests":"",
"companyId":1
}
```

Login \
POST http://188.166.50.249/login \

```
{
"username": "test",
"password": "123123"
}
```

LogOut \
GET http://188.166.50.249/logout \

```
{
"username": "test",
"password": "123123"
}
```

**_ USERS _**

Get all users \
GET http://188.166.50.249/users \

Get User by id \
GET http://188.166.50.249/users/(id) \

Edit User \
PATCH http://188.166.50.249/users/(id) \

```
{
"username": "aga",
"email": "test@test12.test",
"password": "123123",
"imgUrl":"",
"basedCountry":"USA",
"about":"",
"remainingDays":123,
"role":"employer",
"requests":"",
"companyId":1
}
```

Delete User \
DELETE http://188.166.50.249/users/(id) \

**_ Companies _**

Get all Companies \
GET http://188.166.50.249/companies \

Get Company by id \
GET http://188.166.50.249/companies/(id) \

Edit Company \
PATCH http://188.166.50.249/companies/(id) \

```

```

Delete Company \
DELETE http://188.166.50.249/companies/(id) \

Я туплю как обновить поле асоциаций для компании когда добавляю юзера.
https://stackoverflow.com/questions/45845764/sequelize-typeerror-phone-setuser-is-not-a-function
