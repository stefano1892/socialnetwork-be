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
router.post('/', async (req, res, next) => {
  const user = req.body
  const emailInsert = req.body.email
  const checkEmail = await Users.findOne({
    where: {
      email: emailInsert
    }
  })
  if (checkEmail) {
    res.send('Utente esistente')
  } else {
    await Users.create(user);
    res.send(user);
  }
});

module.exports = router;