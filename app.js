'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');

const app = express();

app.use('/assets', express.static('./assets'));
app.use(express.json());


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/tracks', function(req, res) {
  database.getAllTracks()
      .then(data => res.json(data))
      .catch(e => {
        console.log(e);
        res.status(500).send(e.code);
      });
});

// app.get('/playlists', function(req, res) {
//   database.getAllTracks()
//       .then(data => res.json(data))
//       .catch(e => {
//         console.log(e);
//         res.status(500).send(e.code);
//       });
// });

// app.post('/playlists', function(req, rea) {
//   console.log(req.body);
// });

// app.delete('/playlists/:id', function(req, res) {
//   console.log(req.body);
// });

// app.get('/tracks', function(req, res) {
//   console.log(req.body);  
// });

// app.get('/tracks/:id', function(req, res) {
//   console.log(req.body);
// });

// app.post('/playlists/:playlist_id/:track_id', function(req, res) {
//   console.log(req.body);
// });

// app.delete('/playlists/:playlist_id/:track_id', function(req, res) {
//   console.log(req.body);  
// });

app.listen(3000, () => console.log('running on port 3000'));