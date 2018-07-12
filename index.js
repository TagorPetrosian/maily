const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

/* 
  ######    A Few Steps Before Deploying To Heroku    ######

  1. Dynamic Port Binding - Heroku tells us which port our app will use, so we need to make sure we listen to the port they tell us to

  2. Specify Node Environment - We want to use a specific version of node, so we need to tell heroku which version we want.
  Added code below after main in the package.json file  
  "engines": {
    "node": "8.1.1",
    "npm": "5.0.4"
  }

  3. Specify Start Script - Instruct Heroku what command to run to start our server running.
  Added code below in "scripts" in the package.json file
  "start": "node index.js"

  4. Create .gitingnore - We don't want to include dependencies, Heroku will do that for us.
  Added node_modules in the file
*/

// Dynamic Port Binding
const PORT = process.env.PORT || 5000;

app.listen(PORT);
