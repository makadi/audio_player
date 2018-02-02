'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'indigo',
  database: 'audio_player'
});

connection.connect();

const dbQuery = function(query) {
  console.log('dbQuery');
  return new Promise(function(resolve, reject) {
    connection,query(query, function(error, results) {
      error ? reject(error) : resolve(results);
    });
  });
}

const getAllTracks = function() {
  console.log('dbQueryGetAll');
  return dbQuery(`SELECT * FROM one`);
}

module.exports = {
  getAllTracks
}