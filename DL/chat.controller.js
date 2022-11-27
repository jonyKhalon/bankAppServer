
const { chatData } = require('./chat.model');

// C R U D

async function create(data) {
    return await chatData.create(data)
}
async function read(filter) {
    return await chatData.find(filter)
}
async function update(filter, data) {
    return await chatData.updateOne(filter, data)
}
async function del(_id) {
    return await update({ _id }, { isActive: false })
}

module.exports = {create,read,update,del}



// create(newUser)

// read({permission:"admin"})

// del('637f7dfd57b0b85b399b3626')