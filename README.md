# server-deployment-practice
# server-deployment-practice

##### Author  : Ibrahim Khdairat

* [Test Report](https://github.com/Laith-Hayajneh/server-deployment-practice/actions)

* [Status](https://laith-server-deploy-dev.herokuapp.com/status)

* [GitHub - Pull Request](https://github.com/Laith-Hayajneh/server-deployment-practice/pull/3)

##### Setup
`.env` requirements
  * `PORT` - Port Number

**Running the app**
* `npm start`
* Endpoint: `/status`
Returns Object

>{
  "domain": "https://laith-server-deploy-dev.herokuapp.com/",
  "status": "running",
  "port": 3000
}


**Tests**
* Unit Tests: `npm run test`