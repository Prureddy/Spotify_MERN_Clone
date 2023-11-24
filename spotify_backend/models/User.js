const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
    },
    username: {
        type:String,
        required:true,
    },
    likedSongs:{
        type:String,
        default: "",
    },
    likedPlaylists: {
        type: String,
        default: "",
    },
    subscribedArtists: {
        type: String,
        default: "",
    },
});

const userModel = mongoose.model("User",User);

module.exports = userModel;