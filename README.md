## Notes
>This is a Number Generator API 

>Api Consists of 5 end points

>register, login, next, current (get, put) 

```
Steps to test: 
-------------
1. Register using a username, email and password. 
2. Login with the registered Email and password 
3. copy the token 
4. Place it in the Headers using "Authorization" Key and value be like "Barrier <token>"
5. Now test the endpoints. 
```

### Date
>6th December 2021
### Location of deployed application
> Database from mongodb.com cluster

>Deployment server heroku 
### Time spent
>Taken breaks in between to manage my routine. Approximately finished the project in 4hrs
### Assumptions made
>Email, Id and username are added to JWT payload as I'm assuming this application is not specific for LOGIN and REGISTER, but specific for number generator 

>Mongoose ODM is used to simplify the database manage the Collection and querying Mongodb

### Shortcuts/Compromises made
> Password is hashed but minimum length and special characters are not required.

> Only 1 Authorization Techenique is used. (Not included and Oauth2 specific authorization)
### Stretch goals attempted
> Deployed to heroku
### Instructions to run assignment locally

-Change directory to root folder 

```
 npm install
```
>Add .env file in the root folder

>add these below 3 lines into .env file
```
PORT=< Port to run the server default 5000) >
MONGODB_URI=< MongoDB URI>
JWT_SECRET=< JWT Secret to sign and verify the token>
```
>To run Development Server
```
npm run dev 
```

>To normally start server

```
npm start 
```

### What did you not include in your solution that you want us to know about?
I thought to include Swagger documentation and a React App to show how application routes works. 
Due to short of time I'm only including API_DOCS.md in the root folder to view the application routes and curl url's
### Other information about your submission that you feel it's important that we know if
I have made this application with a version system where now routes versioned and folder structure is maintained according to versions. 
Each version folder consists of  Controllers, Routes and Services. 

In the route folder, I have used Common, config and middlewares to globalize the common modules.
### Your feedback on this technical challenge
According to me Challenge is not so complex, my assumption regarding the assesment is to check the quality of the project and the standards maintained 