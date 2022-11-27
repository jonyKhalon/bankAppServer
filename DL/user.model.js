const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName : {
        type: String
    },
    email : {
        type: String,
        require : true,
        unique: true
    },
    password : {
        type: String,
        require : true,
        select : false
    },
    permission : {
        type: String,
        enum : ["admin", "editor","viewer"],
        default : "viewer"
    },
    createDate : {
        type: Date,
        default: Date.now
    },
    isActive : {
        type: Boolean,
        default: true
    },

})

const userData = mongoose.model('user',userSchema);
module.exports = {userData};