'use strict';

const ajaxAll = function() {
  const ajax = function(data) {
    console.log('mainAjax');
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open(data.method, data.url);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
          reject(xhr.responseText);
        }
      }
      xhr.send(JSON.stringify(data.body));
      console.log('done')
    });
  }

  // const getPlaylists = function() {
  //   console.log('getPLajax')
  //   return ajax({
  //     method: 'GET',
  //     url: 'http://localhost:3000/playlists',
  //     body: ''
  //   });
  // }

  const getTracks = function() {
    console.log('getTracksAjax');
    let url = 'http://localhost:3000/tracks';
    // url += playlistId === 'all' ? '' : `${playlistId}`;
    return ajax({
      method: 'GET',
      url: url,
      body: ''
    });
  }

  
  return {
    // getPlaylists,
    getTracks
  }
}