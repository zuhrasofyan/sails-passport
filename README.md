# sails-passport

Boilerplate to generate quick pure RESTFUL API with sailsjs + passport and jwt token authentication 

## Available routes:
* POST /register (with new username & password key value)
* POST /auth/login (with exist username & password key value) -> return token
* GET /auth/validate_token (with key:Authorization & value: 'Bearer `<your valid token>`' in header)
* GET /quote/open (to access random Chuck Norris quote)
* GET /quote/protected (with valid token in header to access protected random Chuck Norris quote) 
