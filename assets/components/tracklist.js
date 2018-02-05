'use strict';

const trackList = function() {
  const tracklist = document.querySelector('.tracks-container');
  let trackElements = null;
  let currentPlayIndex = null;
  let tracks = null;
  // let onClick = null;

  const getTracklist = function() {
    console.log('getTracklist');
    ajaxAll().getTracks().then(trackData => {
      tracks = trackData;
      console.log(trackData);
      createTracklistElements(tracks);
    });
  }

  const createTracklistElements = function(tracks) {
    console.log('createTracklistElements');
    tracklist.innerHTML = '';
    console.log(tracklist);
    tracks.forEach(function(track, index) {
      const trackRow = document.createElement('div');
      trackRow.innerHTML = `<span>${index + 1}</span>
                            <span>${track.name}</span>
                            <span>${track.length}</span>`;
      trackRow.classList.add('track');
      trackRow.classList.add('element');
      tracklist.appendChild(trackRow);
    })
    trackElements = tracklist.querySelectorAll('div');
    console.log(trackElements);
  }

  // const makeOnClickAction = function(type) {
  //   onClick = type;
  // }

  return {
    // makeOnClickAction,
    getTracklist
  }
}

trackList().getTracklist();