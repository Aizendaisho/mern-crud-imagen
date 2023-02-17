const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true,
        unique: true,
        trim: true
    },
    description:{
        type: String,
        require:true,
        triem: true
    },
    image:{
        url: String,
        public_id: String,

    }


})

module.exports = mongoose.model("Posts", postSchema)