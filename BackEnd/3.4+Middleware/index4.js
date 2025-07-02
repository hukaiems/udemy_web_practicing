import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
// URL is different from file path so it converses
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName;
app.use(bodyParser.urlencoded({ extended: true}));


app.use(bandNameGenerator);

app.get("/", (req, res) => {
  // require exact path
  // how to know the dir?
  console.log(bandName);
  
  res.sendFile(__dirname + "/public/index.html");
});



app.post("/submit", (req, res) =>{
  console.log(req.body);
  res.send(`<h1> Your band name is ${bandName}<h1> `);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function bandNameGenerator(req, res, next){
  console.log(req.method);
  
  if (req.body.street != "a" && req.method === "POST") {
    res.send("nguuu a cho tao");
    return;
  }
  bandName = req.body["street"] + req.body["pet"];
  next();
};