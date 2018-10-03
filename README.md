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

## API Endpoints

The API of the model article

### Create article
Creates a new article in the database




#### Request 

+ **URL:** /article
+ **METHOD:** POST
+ **URL PARAMS:** none
+ **BODY:** 
    ```JSON
    {
	"title": "My article",
	"author": "Rediguana",
	"content": "Hey this is my article"
    }
    ``` 
#### Response

 **Success response**
 ****
 + Code: 200
 + Content: 
   ```json
   {
    "id": 11,
    "title": "My article",
    "author": "Rediguana",
    "content": "Hey this is my article",
    "updatedAt": "2018-10-01T17:51:12.395Z",
    "createdAt": "2018-10-01T17:51:12.395Z"
    } 
    ```
**Error response**
 ****
 + Code: 404
 +  Content: 
    ```javascript
    {
     message: 'Error'
    } 
     ```

### Get one article by Id
Looks up for an article given a certain id




#### Request 

+ **URL:** /article/:id
+ **METHOD:** GET
+ **URL PARAMS:** `id=[integer]` **required*
+ **BODY:** none
#### Response

 **Success response**
 ****
 + Code: 200
 + Content: 
   ```json
    {
    "id": 1,
    "title": "Corporis in est iure dolores nemo voluptas libero nisi ab.",
    "author": "Hoyt Leuschke",
    "content": "Facere minus voluptatem saepe laudantium molestiae at. Aperiam et autem maxime expedita sit qui et explicabo. Accusamus sed praesentium autem et. Quidem voluptas tempora architecto occaecati repellat. Amet enim aspernatur ullam voluptas impedit voluptas adipisci non necessitatibus. Fugiat autem voluptates facilis atque veritatis.\n \rUt vero numquam labore in. Repellendus incidunt ipsam at. Dolor delectus nobis neque sapiente. Eligendi aliquid assumenda ipsa nihil vero incidunt.\n \rUt voluptatem ut ipsa ab consectetur. Voluptatem libero blanditiis ab sit adipisci minus ipsa nam. Est illum necessitatibus cupiditate est mollitia voluptatem magni. Doloribus consequatur est ea atque. Est sunt ratione dolore minus.",
    "createdAt": "2018-10-01T14:48:02.090Z",
    "updatedAt": "2018-10-01T14:48:02.090Z"
    }
    ```
**Error response**
 ****
 + Code: 404
 +  Content: 
    ```json
    {
    "message": "Article not found"
    } 
     ```

 + Code: 400
 +  Content: 
    ```json
    {
    "message": "ID is not an integer"
    }
     ```
### Get all articles
Shows all articles stored in database

#### Request 

+ **URL:** /article
+ **METHOD:** GET
+ **URL PARAMS:** none
+ **BODY:** none
#### Response

 **Success response**
 ****
 + Code: 200
 + Content: 
   ```json
    [ {
        "id": 5,
        "title": "Soluta aut similique libero consectetur aperiam hic iusto ut iure.",
        "author": "Raheem Stokes",
        "content": "Atque non fugit officia ut id quod. Vero sed aut et et laborum autem delectus soluta doloremque. Distinctio ut autem asperiores sed excepturi delectus animi architecto. Est ut doloribus. Ut quis vitae aut quae voluptas non et ex et.\n \rAspernatur beatae quis optio. Placeat esse repudiandae qui fugiat. In vel expedita sit voluptas expedita.\n \rSapiente quibusdam repudiandae eos quaerat quisquam voluptates nemo sunt. Dolores quidem repellat sit totam. Sit mollitia occaecati atque omnis. Et fugit in fuga officia libero est doloremque. Non maxime eius. Praesentium sint quibusdam fugiat molestiae ut ut non.",
        "createdAt": "2018-10-01T14:48:02.091Z",
        "updatedAt": "2018-10-01T14:48:02.091Z"
    },
    {
        "id": 1,
        "title": "Corporis in est iure dolores nemo voluptas libero nisi ab.",
        "author": "Hoyt Leuschke",
        "content": "Facere minus voluptatem saepe laudantium molestiae at. Aperiam et autem maxime expedita sit qui et explicabo. Accusamus sed praesentium autem et. Quidem voluptas tempora architecto occaecati repellat. Amet enim aspernatur ullam voluptas impedit voluptas adipisci non necessitatibus. Fugiat autem voluptates facilis atque veritatis.\n \rUt vero numquam labore in. Repellendus incidunt ipsam at. Dolor delectus nobis neque sapiente. Eligendi aliquid assumenda ipsa nihil vero incidunt.\n \rUt voluptatem ut ipsa ab consectetur. Voluptatem libero blanditiis ab sit adipisci minus ipsa nam. Est illum necessitatibus cupiditate est mollitia voluptatem magni. Doloribus consequatur est ea atque. Est sunt ratione dolore minus.",
        "createdAt": "2018-10-01T14:48:02.090Z",
        "updatedAt": "2018-10-01T14:48:02.090Z"
    }
    ] 
    ```
**Error response**
 ****
 + Code: 400
 +  Content: 
    ```javascript
    error
     ```

### Update article
Updates the contents of an article




#### Request 

+ **URL:** /article/:id
+ **METHOD:** PUT
+ **URL PARAMS:**`id=[integer]` **required*
+ **BODY:** 
    ```JSON
    {
    "author": "rediguana",
    "content": "This is my modified article"
    }
    ``` 
#### Response

 **Success response**
 ****
 + Code: 200
 + Content: 
   ```json
   {
    "id": 11,
    "title": "My article",
    "author": "rediguana",
    "content": "This is my modified article",
    "createdAt": "2018-10-01T17:51:12.395Z",
    "updatedAt": "2018-10-01T18:27:16.564Z"
    }
    ```
**Error response**
 ****
+ Code: 404
 +  Content: 
    ```json
    {
    "message": "Article not found"
    } 
     ```

 + Code: 400
 +  Content: 
    ```json
    {
    "message": "ID is not an integer"
    }
     ```
### Delete article
Deletes an article




#### Request 

+ **URL:** /article/:id
+ **METHOD:** DELTE
+ **URL PARAMS:**`id=[integer]` **required*
+ **BODY:** none 
#### Response

 **Success response**
 ****
 + Code: 204
 + Content: none

**Error response**
 ****
+ Code: 404
 +  Content: 
    ```json
    {
    "message": "Article not found"
    } 
     ```

 + Code: 400
 +  Content: 
    ```json
    {
    "message": "ID is not an integer"
    }
     ```
