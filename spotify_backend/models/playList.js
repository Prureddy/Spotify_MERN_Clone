const mongoose = require("mongoose");

const playList = new mongoose.Schema({
    name : {
        type:String,
        required: true,
    },
    thumbnail :{
        type:String,
        required:true,
    },
    owner :{
        type :mongoose.Types.ObjectId,
        ref:"user",
    },
    songs:[
        {
        type:mongoose.Types.ObjectId,
        ref: "user",
    },
],
collaborators: {
    type:mongoose.Types.ObjectId,
    ref: "user"
}
    
});

const playListModel = mongoose.model("playList",playList);

module.exports = playListModel;