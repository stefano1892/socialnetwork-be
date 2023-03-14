const express = require('express');
const app = express();
const router = express.Router();
const { Users } = require('../models')

app.use(express.json())

router.put("/", async (req, res) => {
  const userId = req.body.id
  const newPassword = req.body.password
  console.log("sono qua")
  try {

    let user = await Users.findOne({ where: { id: userId } })

    if (!user) {
      return res.status(404).json({ error: "Utente non trovato" })
    }

    user.password = newPassword
    await user.save();

    return res.status(200).json({ message: "Password aggiornata correttamente" })

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Si è verificato un errore durante l\'aggiornamento della password' });
  }
})

module.exports = router