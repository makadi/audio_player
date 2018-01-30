'use strict';

import ajax from 'ajax';
import render from 'render';


const controls = function() {
  const controlPanel = document.querySelector('.controller-container');
  const audioFile = controlPanel.querySelector('audio');
  
  const loadTrack = function() {
    audioFile.src = track.path;
    
    audioFile.addEventListener('canplay', function() {
      togglePlay();
    });

  }

  const prevTrack = function() {
    console.log('prevTrack')
  }

  const nextTrack = function() {
    console.log('nextTrack')
  }

  const currentTrack = function() {
    console.log('currentTrack')
  }

  const renderPlaylists = function() {
    console.log('renderPlaylists')  
  }

  const removeTracklist = function() {
    console.log('renderTracklist')  
  }

  const renderTracklist = function() {
    console.log('renderTracklist')  
  }
}