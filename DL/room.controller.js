
const { roomData } = require('./room.model');

// C R U D

async function create(data) {
    return await roomData.create(data)
}
async function read(filter) {
    return await roomData.find(filter)
}
async function update(filter, data) {
    return await roomData.updateOne(filter, data)
}
async function del(_id) {
    return await update({ _id }, { isActive: false })
}

module.exports = {create,read,update,del}



// create(newUser)

// read({permission:"admin"})

// del('637f7dfd57b0b85b399b3626')