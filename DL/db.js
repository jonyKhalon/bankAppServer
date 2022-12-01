const mongoose = require("mongoose")

// const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://jonny:<jony2232>@cluster0.uyovgyp.mongodb.net/?retryWrites=true&w=majority'
const MONGO_URL = 'mongodb+srv://jonny:jony2232@cluster0.uyovgyp.mongodb.net/?retryWrites=true&w=majority'

const connect = async () => {
    try {
        await mongoose.connect(MONGO_URL, 
            { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
            if (error) throw error
            console.log(`Connection Success, State`, 
            mongoose.connection.readyState);
        })
    } catch (error) {
        console.log(`Error Mongoose`, error.message)
    }
}

module.exports = { connect }