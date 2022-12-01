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


const getAllUsers = async () => {
  return await userDL.read({});
};
// createNewUser(newUser)
const login = async (body) => {
  if (!body.email || !body.password) throw { message: "missing data" };
  const user = await userDL.read({ email: body.email }, "email password");
  console.log("🚀 ~ file: user.service.js:31 ~ login ~ user", user)

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


const addBudget = async (_id, newList) => {
  if (!_id || !newList) throw { message: "missing data" }
  const updateUser = await userDL.update({ _id: _id }, { budget: newList })
  return await userDL.read({})
}

const addTransaction = async (_id, newTransactionsList, newBalance) => {
  if (!_id || !newTransactionsList || !newBalance) throw { message: "missing data" }
  const updateUser = await userDL.update({ _id: _id }, {
    transactions: newTransactionsList, balance: newBalance
  })
  return await userDL.read({})
}

module.exports = { getAllUsers, createNewUser, login, getUserDetails, addBudget, addTransaction };
