'use strict';

const trackList = function() {
  const tracklist = document.querySelector('.tracks-container');
  let trackElements = null;
  let currentPlayIndex = null;
  let tracks = null;
  // let onClick = null;

  const getTracklist = function() {
    ajaxAll.getTracks(playlistId).then(trackData => {
      tracks = trackData;
      createTracklistElements();
    });
  }

  const createTracklistElements = function() {
    tracklist.innerHTML = '';
    tracks.forEach(function(track, index) {
      const trackRow = document.createElement('div');
      trackRow.innerHTML = `<span>${index + 1}</span>
                            <span>${track.title}</span>
                            <span>${track.length}</span>`
      tracklist.appendChild(trackRow);
    })
    trackElements = tracklist.querySelectorAll('div');
  }

  const makeOnClickAction = function(type) {
    onClick = type;
  }

  return {
    getTracklist,
    makeOnClickAction,
    getTracklist
  }
}