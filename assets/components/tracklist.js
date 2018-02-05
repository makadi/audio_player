'use strict';

const tracklist = function() {
  const $tracklist = document.querySelector('.tracks-container');
  let trackElements = null;
  let currentTrackIndex = null;
  let tracks = null;
  // let onClick = null;

  const getTracklist = function() {
    ajaxAll().getTracks().then(trackData => {
      tracks = trackData;
      console.log(trackData);
      createTracklistElements(tracks);
    });
  }

  const createTracklistElements = function(tracks) {
    $tracklist.innerHTML = '';
    tracks.forEach(function(track, index) {
      const trackRow = document.createElement('div');
      trackRow.innerHTML = `<span>${index + 1}</span>
                            <span class="tn">${track.name}</span>
                            <span>${track.length}</span>`;
      trackRow.classList.add('track');
      trackRow.classList.add('element');
      $tracklist.appendChild(trackRow);
    })
    addEventHandler();
  }

  const addEventHandler = function() {
    let trackElements = document.querySelectorAll('.track');
    trackElements.forEach(function(e, i) {
        e.addEventListener('click', function() {
          e.classList.add('element-active');
          e.classList.remove('element');
          handleTrackSelection();
          displayCurrentTrackInfo(tracks[i]);
          controls(tracks).loadTrack(tracks[i]);
        })
    })
  }

  const handleTrackSelection = function(track, currentTrackIndex) {
  }

  const displayCurrentTrackInfo = function(track) {
    const currentInfo = document.querySelector('.current-track-info');
    const artistName = track.name.split('- ')[0];
    const trackTitle = track.name.split('- ')[1];
    currentInfo.innerHTML = `<span>${trackTitle}</span>
                             <span>${artistName}</span>`;
  }

  return {
    getTracklist,
    createTracklistElements,
    handleTrackSelection,
    displayCurrentTrackInfo
  }
}

tracklist().getTracklist();


  // const handleTrackSelection = function(track, currentTrackIndex) {
  //   const trackRows = document.querySelectorAll('.track');
  //   trackRows.forEach(row => {
  //     row.addEventListener('click', function() {
  //       controls(tracks).loadTrack(tracks[i]);
  //     })
  //     console.log(row)
  //   })
  // }
