const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/providers', (req, res) => {
  res.sendFile(path.join(__dirname, '../assets/banks-info.json'))
})

router.post('/publishData', function(req, res, next) {
	res.send(JSON.stringify( {success: true} ));
});

module.exports = router;