'use strict';

const ajaxAll = function() {
  
  console.log('3333333');

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
    console.log('getPLajax')
    return ajax({
      method: 'GET',
      url: 'http://localhost:3000/playlists',
      body: ''
    });
  }

  const getTracks = function(playlistId) {
    console.log('4444444');
    let url = 'http://localhost:3000/tracks';
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