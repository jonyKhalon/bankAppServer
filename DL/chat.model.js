const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    message: {
        type: String,
    },
    img: {
        type: String,
    },
    datetime: {
        type: Date,
        default: Date.now
    },
    likes: [{
        type: mongoose.SchemaTypes.ObjectId
    }],
    fires: [{
        type: mongoose.SchemaTypes.ObjectId
    }],
    hearts: [{
        type: mongoose.SchemaTypes.ObjectId
    }],
    isActive: {
        type: Boolean,
        default: true
    }
})

const chatData = mongoose.model('chat', chatSchema);
module.exports = { chatData, chatSchema };