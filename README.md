# 303-test-express
Test API  Express for 303

## Configuring connection to database

Edit your development settings in `config/config.json` to point to your postgres database. Include your username and password created for the database.

**Example `config/config.json`**

```json
{
  "development": {
    "username": "<your username>",
    "password": "<your password>",
    "database": "303-express-test",
    "host": "127.0.0.1",
    "dialect": "postgres",

  },
  ...
}
```


## Setting up the project

Run the followings commands in order

**Install dependencies**

```
$ yarn install 

```

**Database**
There must be a database created called 303-express-test or you can install it running the following command if postgres binaries are installed locally.

```
$ yarn create-database

```
**Make migrations to database**

```
$ yarn migrate

```
or 
```
$ yarn sequelize db:migrate

```
**Seed database**

```
$ yarn sequelize seed

```
**Start the project**
```
$ yarn start

```
**Verify linting errors**
```
$ yarn lint

```