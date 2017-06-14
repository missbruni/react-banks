'use-strict'

const express = require('express');
const path = require('path');
const api = require('./api');
const app = express();

const port = process.env.PORT || 3001;

//for every request I will be looking inside the build folder for the matching file
app.use('/', express.static(path.join(__dirname, 'build')));

//if the request has api then direct to api routes
app.use('/api', api);

// if none of them match, serve index.html (keeping the person to the same path)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// to start the server indicating which port to be listened on
app.listen(port, () => {
  console.log('listening on http://localhost:' + port + '/'); 
})