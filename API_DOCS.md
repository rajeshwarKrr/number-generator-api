# API DOCUMENTATION

Localhost URL : http://localhost:5000

Server URL : https://number-generator-api.herokuapp.com

Use terminal to set API_URL

>SET API_URL=http://localhost:5000

OR 

>SET API_URL=https://number-generator-api.herokuapp.com
### Register 
> /v1/auth/register POST

>curl --header "Content-Type: application/json" --request POST --data "{\"username\": \"raj12\", \"email\": \"rajeshwar@gm.c\", \"password\": \"pass123\"}" %API_URL%/v1/auth/register

```
{
	"message": "Success",
	"data": {
		"username": "raj12",
		"email": "rajeshwar@gm.c",
		"currentNumber": 0,
		"id": "61ae4b085ff0512d8f8b33ea"
	}
}
```

### login POST
> /v1/auth/login POST

>curl --header "Content-Type: application/json" --request POST --data "{\"email\": \"rajeshwar@gm.c\", \"password\": \"pass123\"}" %API_URL%/v1/auth/login

```
{
	"message": "Success",
	"data": {
		"username": "raj12",
		"email": "rajeshwar@gm.c",
		"currentNumber": 0,
		"id": "61ae4b085ff0512d8f8b33ea",
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoicmFqZXNod2FyQGdtLmMiLCJpZCI6IjYxYWU0YjA4NWZmMDUxMmQ4ZjhiMzNlYSIsInVzZXJuYW1lIjoicmFqMTIifSwiaWF0IjoxNjM4ODEyNDkwLCJleHAiOjE2Mzg4MTQyOTB9.nc2OlSu57v_bnA_JzYOh99cI5VUq74jl5F77SV6PwW8"
	}
}
```

Now copy token, and use terminal to SET TOKEN_VAR 

>SET TOKEN_VAR=Bearer ~~paste copied token here~~

### Testing profile 
>/v1/profile GET

> curl --header "Content-Type: application/json" --header "Authorization: %TOKEN_VAR%" --request GET %API_URL%/v1/profile

```
{
	"message": "Success",
	"authorized": true,
	"data": {
		"profile": {
			"username": "raj12",
			"email": "rajeshwar@gm.c",
			"currentNumber": 121,
			"id": "61ae4b085ff0512d8f8b33ea"
		}
	}
}
```
## Assignment

### next 
>v1/next

>curl --header "Content-Type: application/json;" --header "Authorization: %TOKEN_VAR%" --request GET %API_URL%/v1/next

```
{
	"message": "Success, Number Incremented by 1",
	"authorized": true,
	"number": 1
}
```

### current
> v1/current GET

>curl --header "Content-Type: application/json;" --header "Authorization: %TOKEN_VAR%" --request GET %API_URL%/v1/current

```
{
	"message": "Success, Current Number",
	"authorized": true,
	"number": 1
}
```

### Reset / Update Current
> /v1/current PUT

>curl --header "Content-Type: application/json" --header "Authorization: %TOKEN_VAR%" --request PUT --data "{\"current\": 121}" %API_URL%/v1/current

```
{
	"message": "Success, number Updated or Reset to  121",
	"authorized": true,
	"number": 121
}
```

## Unset Terminal Variables
```
Paste this in the terminal 

SET API_URL=
SET TOKEN_VAR=

```

