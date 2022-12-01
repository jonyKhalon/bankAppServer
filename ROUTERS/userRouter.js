const express = require("express");
const router = express.Router();
const userLogic = require("../BL/user.service");

router.get("/", async (req, res) => {
  try {
    const allUsers = await userLogic.getAllUsers();
    res.send(allUsers);
  } catch (error) {
    res.status(401).send({ error: error });
  }
});



router.post("/new", async (req, res) => {
  try {
    const newUser = await userLogic.createNewUser(req.body);
    res.send(newUser);
  } catch (error) {
    res.status(403).send({ error: error["message"] });
  }
});

router.post("/login", async (req, res) => {
  try {
    const isAuthorized = await userLogic.login(req.body);
    res.send(isAuthorized);
  } catch (error) {
    res.status(403).send({ error });
  }
});

router.get("/details/:id", async (req, res) => {
  try {
    const user = await userLogic.getUserDetails(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(403).send({ error });
  }
});
router.put("/addBudget", async (req, res) => {
  try {
    const users = await userLogic.addBudget(req.body.userId, req.body.newBudget);
    // console.log("🚀 ~ file: userRouter.js:52 ~ router.put ~ users", users)
    res.send(users);
  } catch (error) {
    res.status(403).send({ error });
  }
});
router.put("/addTransaction", async (req, res) => {
  try {
    const users = await userLogic.addTransaction(req.body.id, req.body.transaction, req.body.balance);
    // console.log("🚀 ~ file: userRouter.js:52 ~ router.put ~ users", users)
    res.send(users);
  } catch (error) {
    res.status(403).send({ error });
  }
});


module.exports = router;
