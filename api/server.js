//express for server
const express = require('express');
//routes
const hobbits = require('../alphatestDB/hobbits/hobbitsModel.js')
//server uses express
const server = express();
//middleware
server.use(express.json());
//routing
//ROOT
server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
  // res.status(200).send('Hail');
});
//HOBBITS
server.get('/hobbits', async (req, res) => {
  const rows = await hobbits.getAll();

  res.status(200).json(rows);
});
//CATS


module.exports = server;