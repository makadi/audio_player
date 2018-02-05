'use strict';

const playlist = function() {
  const $playlist = document.querySelector('.playlists-container');
  let playlistElements = null;
  let playlists = null;

  const getPlaylists = function() {
    console.log('getPlaylist');
    ajaxAll().getPlaylists().then(playlistData => {
      playlists = playlistData;
      console.log(playlists);
      createPlaylistElements(playlists);
    });
  }

  const createPlaylistElements = function(playlists) {
    $playlist.innerHTML = '';
    playlists.forEach(function(pl, index) {
      const playlistRow = document.createElement('div');
      playlistRow.innerHTML = `<span>${index + 1}</span>
                            <span>${playlists.Tables_in_audio_player}</span>`;
      playlistRow.classList.add('playlist');
      playlistRow.classList.add('element');
      $playlist.appendChild(playlistRow);
    })
    playlistElements = $playlist.querySelectorAll('div');
  }

  return {
    getPlaylists
  }
}

playlist().getPlaylists();