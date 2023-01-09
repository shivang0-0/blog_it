const express = require("express");
const mongoose = require("mongoose");

const app = express();

//connect to the mongodb database...
mongoose.connect("mongodb://localhost/blog_it", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connection to mongodb was successfull!!");
})

//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");

//routes
app.use(require("./routes/index"));
app.use(require("./routes/compose"));

//server configuration
app.listen(3000, () => console.log("Listening at port 3000"));