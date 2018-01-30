'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());

app.use('/assets', express.static('./assets'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'indigo',
  database: 'audio_player'
});

connection.connect();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/playlists', function(req, res) {
  console.log(req.body);
});

app.post('/playlists', function(req, rea) {
  console.log(req.body);
});

app.delete('/playlists/:id', function(req, res) {
  console.log(req.body);
});

app.get('/tracks', function(req, res) {
  console.log(req.body);  
});

app.get('/tracks/:id', function(req, res) {
  console.log(req.body);
});

app.post('/playlists/:playlist_id/:track_id', function(req, res) {
  console.log(req.body);
});

app.delete('/playlists/:playlist_id/:track_id', function(req, res) {
  console.log(req.body);  
});

app.listen(3000, () => console.log('running on port 3000..'));
