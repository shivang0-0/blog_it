const mongoose = require("mongoose");

const BlogSchema = new mongoose.schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    postedAt: {
        type: String,
        default: new Date().toString()

    }
});

module.exports = new mongoose.model("Blog", BlogSchema);