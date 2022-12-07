const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json())

const { Users } = require("../models")

/* POST login */
router.post('/', async (req, res) => {
  const user = req.body
  const userFound = await Users.findAll({
    where: {
      email: user.email,
      password: user.password
    }
  });

  if (userFound.length > 0) {
    return res.send(userFound[0]);
  } else {
    return res.send()
  }
});

module.exports = router;