const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');
const port = 3000;

app.use(express.urlencoded({extended:true}));

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

let post = [
    {
    id: uuidv4(),
    username: "HARSHVARDHAN BARETH",
    college: "Institute of Engineering and Technology, MLSU",
    content: "Hello, Aap Kaise ho ?"
    }
]

app.get("/", (req, res) => {
    res.render("index", {post}); // Render the 'index' template with the 'post' array
});

app.post("/", (req, res, next) => {
    let { username, content } = req.body;
    let {id} = uuidv4();
    post.push({ id, username, content }); 
    console.log(req.body);
    res.redirect("/");
});

app.get("/:id", (req, res, next)=>{
    let {id} = req.params;
    let posts = post.find((p)=>id===p.id);
    console.log(id);
    console.log(posts);
    res.render("display", {posts})
})

app.patch("/:id", (req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let posts = posts.find((p)=>id===p.id);
    posts.content = newContent;
    res.send("Patch request work kr rahi hain.")
})

app.get("/:id/edit", (req, res)=>{
    let {id} = req.params;
    let posts = post.find((p)=>id===p.id);
    res.render("edit")
})