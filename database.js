'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'indigo',
  database: 'audio_player'
});

connection.connect(function (err){
  if(err){
      console.log('Error connecting to DB.');
      return;
  };
  console.log('Connected to the DB.');
});


const dbQuery = function(query) {
  console.log('mainQuery');
  return new Promise(function(resolve, reject) {
    connection.query(query, 
      function(err, results) {
          if (err) {
               reject(err);
          } else {
              resolve(results);
          }
    });
  });
}

const getAllTracks = function() {
  console.log('getAllTracksQueryString');
  return dbQuery(`SELECT * FROM one;`);
}

module.exports = {
  getAllTracks
}