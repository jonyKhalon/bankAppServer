const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fName : {
        type: String
    },
    lName : {
        type: String
    },
    displayName : {
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
    createDate : {
        type: Date,
        default: Date.now
    },
    isActive : {
        type: Boolean,
        default: true
    }
})

const userData = mongoose.model('user',userSchema);
module.exports = {userData};