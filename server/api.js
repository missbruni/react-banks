const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/providers', (req, res) => {
  res.sendFile(path.join(__dirname, 'providers.json'))
})

module.exports = router;