# sails-passport

Boilerplate to generate quick pure RESTFUL API with sailsjs + MySQL + passport and jwt token authentication 

## Available Routes:
* POST /register (with new email & password key value)
* POST /auth/login (with existed email & password key value) -> return token
* GET /auth/validate_token (with key:Authorization & value: 'Bearer `<your valid token>`' in header)
* GET /quote/open (to access random Chuck Norris quote)
* GET /quote/protected (with valid token in header to access protected random Chuck Norris quote) 

## Key Features:
### Version 0.0.1
* Sailsjs web framework with all their features
* Authentification with passportjs (local) and JSON Web Token
* MySQL database connection
* Enable CORS for access from different application
* Password encrypted (with bcrypt)
* Email checking
* Random Chuck Norris Quote! 