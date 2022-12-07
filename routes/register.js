const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json())

const { Users } = require("../models")

/* GET */
router.get('/', async (req, res) => {
  const usersList = await Users.findAll()
  res.json(usersList)
});

/* POST */
router.post('/', async (req, res) => {
  const user = req.body
  await Users.create(user);
  res.json(user);
});

module.exports = router;