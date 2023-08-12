var audio=document.createElement('audio');
audio.setAttribute('src','sound.mp3')
document.addEventListener('keydown', event => {
      if (event.keyCode === 32) { // Space key
        audio.play()
          .then(() => {
            console.log('Audio playback started.');
          })
          .catch(error => {
            console.error('Error starting audio playback:', error);
          });
      }
    });
