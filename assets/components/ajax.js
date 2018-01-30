'use strict';

const ajaxAll = function() {
  const ajax = function(data) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
          reject(xhr.responseText);
        }
      }
      xhr.send(JSON.stringify(data.body));
    });
  }

  const getPlaylists = function() {
    return ajax({
      method: 'GET',
      url: 'http://localhost:3000/playlists',
      body: ''
    });
  }

  const getTracks = function(playlistId) {
    let url = 'http://localhost:3000/playlist-tracks';
    url += playlistId === 'all' ? '' : `${playlistId}`;
    return ajax({
      method: 'GET',
      url: url,
      body: ''
    });
  }

  return {
    getPlaylists,
    getTracks
  }
}