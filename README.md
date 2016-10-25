# APIv2
Second version of our API for the EIP (Epitech Innovating Project) named : BikeTrack.
____________
## Get started

### Prerequisite
>Node (v6) and NPM already installed on your computer.

```javascript
if (!node) {
    return "https://nodejs.org/en/download/"
} else {
    return "Good to Go!"
}
```

### Clone the depot
```bash
cd whereYouWannaClone
git clone git@github.com:BikeTrack/APIv2.git
```

### Install the libraries
```bash
cd rootOfProject
npm install
```

### Environment Variable & Security
To secure the API we load some credential and an API Key as an environment variable.
Thanks to the middleware dotenv included in `package.json` we can manage this easily.


1. Create a `.env` file at the root of the project. The file will be read at start and automatically set the variables.
2. Add 3 variables in your file:
```javascript
MONGO_USER //Your Mongo username
MONGO_PASS //Your Mongo password
API_KEY_APP //An API Key to secure the client/server communication
```
#### Exemple :
```javascript
//.env
MONGO_USER=foo
MONGO_PASS=bar
API_KEY_APP=1234567890
```

### Run Project
####3 ways

* Classic

`node server.js`

* With File Watcher

> if [nodemon](https://www.npmjs.com/package/nodemon) is not installed first :
`npm install nodemon -g`

`nodemon server.js`

* The best option with app monitoring, file watcher and much more...

> if [PM2](http://pm2.keymetrics.io) is not installed first :
`npm install -g pm2`

`pm2 start server.js`



Made by [Gil Felot](gfelot.xyz) with ❤️
