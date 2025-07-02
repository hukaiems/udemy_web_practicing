import bodyParser from "body-parser";
import express from "express";
// to get the path
import { dirname } from "path";
import { fileURLToPath } from "url";
// conversion to get all of the path
// it can figure out dynamically using node and express
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// default body parser
// It uses a URL-encoded requests
// from string json into object (request) for express to understand
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  // require exact path
  // how to know the dir?
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) =>{
  console.log(req.body);
  res.send("I received ur request!!!!");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
