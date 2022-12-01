const { userData } = require("./user.model");

// C R U D

async function create(data) {
  return await userData.create(data);
}
async function read(filter, proj) {
  return await userData.find(filter, proj);
}
async function update(filter, data) {
  return await userData.updateOne(filter, data);
}
async function del(_id) {
  return await update({ _id }, { isActive: false });
}

module.exports = { create, read, update, del };

// create(newUser)

// read({permission:"admin"})

// del('637f7dfd57b0b85b399b3626')
