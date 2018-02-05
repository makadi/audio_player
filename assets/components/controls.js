'use strict';

const controls = function(tracks) {
  const controlPanel = document.querySelector('.controller-container');
  const audio = controlPanel.querySelector('audio');
  const $tracks = tracks;

  
  const loadTrack = function(track) {
    console.log('loadTrack');
    // console.log(track);
    audio.src = track.path;
    let trackElements = document.querySelectorAll('.track');
    let trackNames = document.querySelectorAll('.tn');
    trackElements.forEach(function(e, i) {
      e.addEventListener('click', function() {
        e.classList.add('element-active');
        e.classList.remove('element');
        // if (i === audio)
      })
    })
    currentTrack(track);
    // audio.addEventListener('canplay', function() {
      //   togglePlay();
      // });
  }

  const currentTrack = function(track) {
    console.log('currentTrack');
    const currentInfo = document.querySelector('.current-track-info');
    const artistName = track.name.split('- ')[0];
    const trackTitle = track.name.split('- ')[1];
    currentInfo.innerHTML = `<span>${trackTitle}</span>
                             <span>${artistName}</span>`;
  }

  // const prevTrack = function() {
  //   console.log('prevTrack')
  // }

  // const nextTrack = function() {
  //   console.log('nextTrack')
  // }


  // const renderPlaylists = function() {
  //   console.log('renderPlaylists')  
  // }

  // const removeTracklist = function() {
  //   console.log('renderTracklist')  
  // }

  // const renderTracklist = function() {
  //   console.log('renderTracklist')  
  // }

  return {
    loadTrack
  }
}