const express = require("express");
const app = express();

const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

// Middleware for logging errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Port listening on ${port}`);
});

app.get("/", (req, res, next) => {
    res.render("index", {
        name: "HarshVardhan bareth",
        college: "Institute of Engineering and Technology, MLSU"
    });
});

app.get("/insta/:username", (req, res, next)=>{
    let follow = ["harsh", "harshit", "deepak", "harsh vardhan bareth"]
    let {username} = req.params;
    res.render("instagram", {username, follow});
})

app.get("/new", (req, res, next) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("new", { num });
});

app.get("/second", (req, res, next) => {
    let code = "<h1> Hello, aap Kaise ho ?</h1>";
    res.send(code);
});

app.get("/id/:username", (req, res) => {
    let { username } = req.params;
    res.send(`This is account of ${username}`);
});
