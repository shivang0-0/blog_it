const router = require("express").Router();
const Blog = require("../models/Blog");

router
    .get("/compose", (req, res) => {
        res.render("composeBlog");
    })

    .post("/compose", (req, res) => {
        const { title, content } = req.body;

        // check for empty fields
        if (!title || !content)
            return res.send("Enter all fields!!");

        const newBlog = new Blog({ title, content });

        //save blog to db
        newBlog
            .save()
            .then(() => {
                console.log("Blog saved successfully!!");
                res.redirect("/");
            })
            .catch((err) => console.log(err));
    });

module.exports = router;