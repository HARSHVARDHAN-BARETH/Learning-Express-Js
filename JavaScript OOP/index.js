const express = require("express");
const app = express();

const port = 3000;

app.use(express.urlencoded({extended: true}));
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

app.get("/response", (req, res, next)=>{
    let {username} = req.query;
    res.send(`Working! ${username}`)
})
app.post("/response", (req, res, next)=>{
    let {username} = req.query;
    res.send(`Working! ${username}`)
})

