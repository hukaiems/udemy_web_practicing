import express from "express";
const app = express();
const port = 3000;

// get code
app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.listen(port, () => {
    console.log(`server running on port ${port}!`);
})