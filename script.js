// ... (keep all previous code: hearts, moving No, Yes reveal, confetti hearts) ...

// Optional: Make music louder/clearer when she says Yes
yesBtn.addEventListener('click', () => {
  // ... previous code ...
  
  // Optional: unmute or raise volume (browser may still require click interaction)
  const music = document.getElementById('bg-music');
  music.src = music.src.replace('mute=0', 'mute=0'); // ensure not muted
});