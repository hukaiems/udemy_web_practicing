import express from "express";
import path from "path";

const app = express();
const port = 3000;

// set viewengine to create dynamic web pages
app.set("view engine", "ejs");

const d = new Date();
let day = d.getDay();

// remember to initial app
app.get("/", (req, res) => {
    // can code the logic like normal language

    let message =""
    if (day > 0 && day <6){
        message = "Huslte till weekend baby, toward ur f*cking dreammmm.";
    }
    else {
        message = "Chilling and killing them softly now, muahaha.";
    }

    // render it put content inside the {} braces
    res.render("index.ejs", {text:message});
});

// create a listen event for easier tracking website
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
