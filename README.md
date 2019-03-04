# Meat - Angular App

### Installing dependences

`npm install`

### start server

`ng serve` ou `npm start`

## 2. starting the Backend

### installing the json-server

`npm install -g json-server`

### starting service (in root application)

`json-server db.json`

## Goodies

Regular Expressions to validate the form.

### Email Regex

`/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`

### Number Regex

`/^[0-9]*$/`


## Production
run:
> npm build --prod

To configure youer htpp server without hash navagation you need to see this link above:
https://angular.io/guide/deployment
Session: Routed apps must fallback to index.html
