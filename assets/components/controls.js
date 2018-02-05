'use strict';

const controls = function(tracks) {
  const controlPanel = document.querySelector('.controller-container');
  const audio = controlPanel.querySelector('audio');
  const $tracks = tracks;
  let currentTrackIndex = 0;

  const loadTrack = function(track) {
    currentTrackIndex = track.id;
    audio.src = track.path;
  }

  const prevTrack = function() {
    if (currentTrackIndex > 0) {
      currentTrackIndex -= 1;
    } else {
      currentTrackIndex = tracks.length - 1;
    }
    return currentTrackIndex;
  }
  
  const nextTrack = function() {
    if (currentTrackIndex < tracks.length - 1) {
      currentTrackIndex += 1;
      } else {
        currentTrackIndex = 0;
      }
    return currentTrackIndex;
  }
  
  return {
    loadTrack,
    prevTrack,
    nextTrack
  }
}


  // const playPause = function() {
  //   if (audio.paused) {
  //     audio.play();
  //   } else {
  //     audio.pause();
  //   }
  // }
  
  // audio.addEventListener('canplay', function() {
    //   togglePlay();
    // });
  
  // const renderPlaylists = function() {
  //   console.log('renderPlaylists')
  // }

  // const removeTracklist = function() {
  //   console.log('renderTracklist')
  // }

  // const renderTracklist = function() {
  //   console.log('renderTracklist')
  // }