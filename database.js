'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'indigo',
  database: 'audio_player'
});

connection.connect();

const dbQuery = function() {
  return new Promise(function(query) {
    connection,query(query, function(error, resulta) {
      error ? reject(error) : resolve(results);
    });
  });
}

const getAllTracks = function() {
  return dbQuery(`SELECT * FROM one`);
}

