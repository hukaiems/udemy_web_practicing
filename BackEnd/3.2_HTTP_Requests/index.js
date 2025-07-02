import express from "express";
const app = express();
const port = 3000;

// to send a request "Hello!"
// req = request, res = respond
app.get("/", (req, res) =>{
    res.send("<h1>A Damn!<h1>");
});

app.get("/contact", (req, res) => {
    res.send("0987676564");
});

app.get("/about", (req, res) =>{
    res.send("It is just another man trying to learn new things for his life!");
});

// to make the server localhost listening
app.listen(port, () =>{
    console.log(`server running on port ${port}!`);
})