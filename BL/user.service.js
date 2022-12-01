require("dotenv").config();

const userDL = require("../DL/user.controller");

async function createNewUser(data) {
  // validation fields
  console.log(data);
  if (!data.fullName || !data.email || !data.password) throw "missing data";

  // if user is exist
  let user = await userDL.read({ email: data.email });
  if (user[0]) throw "user is exist";

  return await userDL.create(data);
}

let newUser = {
  fullName: "liron haim",
  // email: 'Avi@Levi.com',
  email: "liron@gmail.com",
  password: "98372jhxz",
};

const getAllUsers = async () => {
  return await userDL.read({});
};
// createNewUser(newUser)
const login = async (body) => {
  if (!body.email || !body.password) throw { message: "missing data" };
  const user = await userDL.read({ email: body.email }, "email password");

  if (!user[0]) throw { message: "user dosn't exist" };
  if (user[0].password === body.password) {
    return { login: true, userId: user[0]._id };
  } else {
    return { login: false };
  }
};

const getUserDetails = async (id) => {
  if (!id) throw { message: "missing data" };
  const user = await userDL.read({ _id: id });
  if (!user[0]) throw { message: "user dosn't exist" };
  return user[0];
};
module.exports = { getAllUsers, createNewUser, login, getUserDetails };
