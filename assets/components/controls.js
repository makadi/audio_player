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
    


    
    // audio.addEventListener('canplay', function() {
    //   togglePlay();
    // });

  }

  // const prevTrack = function() {
  //   console.log('prevTrack')
  // }

  // const nextTrack = function() {
  //   console.log('nextTrack')
  // }

  // const currentTrack = function() {
  //   console.log('currentTrack')
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