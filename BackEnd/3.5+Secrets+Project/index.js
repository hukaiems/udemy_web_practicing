//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended: true}));
app.use(checkPassword);

app.get("/", (req, res) => {
    // require exact path
    // how to know the dir?
    console.log("oke");
    
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req, res) =>{
    console.log(req.body);
    if (userIsAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});

function checkPassword (req, res, next){
    if (req.body.password === "a"){
        userIsAuthorised = true;
    }
    next();
};