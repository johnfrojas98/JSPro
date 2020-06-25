import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './Plugins/AutoPlay.js';

  const video = document.querySelector('video');
  const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay()],
   });

  const buttonPlay = document.getElementById("playButton");
  const buttonMute = document.getElementById("muteButton");
  
  buttonPlay.onclick = () => player.togglePlay();
  buttonMute.onclick = () => player.toggleMute();