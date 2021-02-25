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
POST http://188.166.50.249/signup

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
POST http://188.166.50.249/login

```
{
"username": "test",
"password": "123123"
}
```

LogOut \
GET http://188.166.50.249/logout

**_ User _**

Get all users \
GET http://188.166.50.249/users

Get User by id \
GET http://188.166.50.249/users/(id)

Edit User \
PATCH http://188.166.50.249/users/(id)

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
DELETE http://188.166.50.249/users/(id)

Get all request for User with ID \
GET http://188.166.50.249/users/(id)/requests

**_ Companies _**

Get all Companies \
GET http://188.166.50.249/companies

Get Company by id \
GET http://188.166.50.249/companies/(id)

Add Company \
POST http://188.166.50.249/companies

```
{
  "operatingCountries": [
    "Spain"
  ],
  "name": "Super Puper comp"
}
```

Edit Company \
PATCH http://188.166.50.249/companies/(id)

```
{
  "operatingCountries": [
    "Spain",
		"USA"
  ],
  "name": "Super Puper comp LTD"
}
```

Delete Company \
DELETE http://188.166.50.249/companies/(id)

**Requests**

Get all Requests \
GET http://188.166.50.249/hollyday

Get Request by id \
GET http://188.166.50.249/hollyday/(id)

Add Request \
POST http://188.166.50.249/hollyday

```
{
"initDate":"2021-02-13 17:56:37",
"endDate":"2021-02-13 17:56:37",
"type":"holidays",
"status":"open",
"title":"Lorem Ipsum",
"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"documentUrl":"",
"userId":"1",
"companyId":"1"
}
```

Edit Request \
PATCH http://188.166.50.249/hollyday/(id)

```
{
"initDate":"2021-02-13 17:50:37",
"endDate":"2021-02-13 17:56:37",
"type":"holidays",
"status":"approved",
"title":"Lorem Ipsum",
"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
"documentUrl":"",
"userId":"1",
"companyId":"1"
}
```

Delete Request \
DELETE http://188.166.50.249/hollyday/(id)

## TODO

1. validation request
2. req.session.currentUser , use to return data just for this company
3. req.session.currentUser , use to validate user rights according to user type
4. add seeds for **Request**
