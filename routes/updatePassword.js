const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json())

router.put("/", (req, res) => {
  const newPsw = req.body
  res.send(newPsw)
})

module.exports = router