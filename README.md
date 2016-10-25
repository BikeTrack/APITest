# APIv2
Second version of our API for the EIP (Epitech Innovating Project) name : BikeTrack.

## Get started

### Prerequisite
Node (v6) and NPM already installed on your computer.
`if (!node) {
    return [URL](https://nodejs.org/en/download/)
  } else {
    return "Good to Go!"
    }`

### Clone the depot
`cd whereYouWannaClone`
`git clone https://nodejs.org/en/download/`

### Install the libraries
`npm install`

### Environment Variable & Security
To secure the API we load some credential and an API Key as an environment variable.
Thanks to the middleware dotenv inclued in `package.json`.
Create a `.env` file at the root of the project.
