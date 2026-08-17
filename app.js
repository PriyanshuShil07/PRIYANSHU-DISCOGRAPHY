// ==========================================
// 🔒 BASIC CLIENT-SIDE AUTHENTICATION
// Base64 encoding obscures the password from casual inspection.
// ==========================================
const ENCODED_PASSWORD = btoa("Priyanshu2026");

// Tracklist strictly mapped to the emoji-free Mac file names
let mySongs = [
  { title: "Ab Keh Bhi Do Na (v1)", file_path: "Music/__Ab Keh Bhi Do Na__(1)_011821.mp3" },
  { title: "Ab Keh Bhi Do Na (v2)", file_path: "Music/__Ab Keh Bhi Do Na___011709.mp3" },
  { title: "Code Mera Dil", file_path: "Music/_Code Mera Dil_ (Techy Love Song) _.mp3" },
  { title: "Tera Haath Mera Haath (v1)", file_path: "Music/_Tera Haath Mera Haath_ (1).mp3" },
  { title: "Tera Haath Mera Haath (v2)", file_path: "Music/_Tera Haath Mera Haath_.mp3" },
  { title: "Tujhse Kahan Juda Hoon Main (v1)", file_path: "Music/_Tujhse Kahan Juda Hoon Main_ (Romantic Love Song) (1).mp3" }, 
  { title: "Tujhse Kahan Juda Hoon Main (v2)", file_path: "Music/_Tujhse Kahan Juda Hoon Main_ (Romantic Love Song).mp3" }, 
  { title: "Meri Duniya Hai Tu (v1)", file_path: "Music/_Meri Duniya Hai Tu_(1)_012029.mp3" },
  { title: "Meri Duniya Hai Tu (v2)", file_path: "Music/_Meri Duniya Hai Tu__011926.mp3" },
  { title: "Sirf Tum (v1)", file_path: "Music/_Sirf Tum_ (1)_011328.mp3" },
  { title: "Sirf Tum (FLAC 1)", file_path: "Music/_Sirf Tum__011026 (1).flac" },
  { title: "Sirf Tum (v2)", file_path: "Music/_Sirf Tum__011026.mp3" },
  { title: "Tere Bina (v1)", file_path: "Music/_Tere Bina___(1)_011133.mp3" },
  { title: "Tere Bina (FLAC)", file_path: "Music/_Tere Bina___011238.flac" },
  { title: "Tere Bina (v2)", file_path: "Music/_Tere Bina___011238.mp3" },
  { title: "Firewall Pyaar", file_path: "Music/3. _Firewall Pyaar_ (Heartbreak Song)_.mp3" }, 
  { title: "Reboot Dil Ka", file_path: "Music/4. _Reboot Dil Ka_ (Confession Song).mp3" },
  { title: "Love Song (v1)", file_path: "Music/Love song (1)_034625.mp3" },
  { title: "Love Song (v2)", file_path: "Music/Love song (2)_034450.mp3" },
  { title: "Sukoon (The Anchor)", file_path: "Music/Sukoon(The Anchor).mp3" }
];

let currentIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let favoriteSongs = [];

// Safely access local storage
try {
  favoriteSongs = JSON.parse(localStorage.getItem('priyanshu_favorites')) || [];
} catch (e) {
  console.warn("Local storage disabled or unavailable. Favorites will not persist.");
}

const playerA = document.getElementById('audio-player-a');
const playerB = document.getElementById('audio-player-b');
let activePlayer = playerA; 
const coverArt = document.getElementById('cover-art');
const playBtn = document.getElementById('play-btn');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');
const playlistDiv = document.getElementById('playlist');
const visualizerCanvas = document.getElementById('freq-visualizer');
const canvasCtx = visualizerCanvas.getContext('2d');
const terminalText = document.getElementById('notes-text');
const mainPlayerCard = document.getElementById('player-card');

let audioCtx, analyser, sourceA, sourceB, bassFilter;
let isOverclocked = false;

const ambientRain = new Audio('https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg');
const ambientKeyboard = new Audio('https://actions.google.com/sounds/v1/foley/typing_on_a_typewriter.ogg');
ambientRain.loop = true; ambientKeyboard.loop = true;

document.getElementById('unlock-btn').addEventListener('click', checkPassword);
document.getElementById('password-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') checkPassword(); });

function checkPassword() {
  const userInput = document.getElementById('password-input').value;
  if (btoa(userInput) === ENCODED_PASSWORD) {
    document.getElementById('lock-screen').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('lock-screen').style.display = 'none';
      const mainApp = document.getElementById('main-app');
      mainApp.style.display = 'flex';
      setTimeout(() => { mainApp.style.opacity = '1'; }, 50);
      initApp();
    }, 500);
  } else {
    const errorMsg = document.getElementById('error-msg');
    errorMsg.style.opacity = '1';
    setTimeout(() => { errorMsg.style.opacity = '0'; }, 3000); 
  }
}

function initApp() {
  renderPlaylist();
  setupAudioContext();
  setupThemes();
  setupModes();
  setupAmbientControls();
  setupSocialFeatures();
  
  playerA.addEventListener('timeupdate', updateProgress);
  playerB.addEventListener('timeupdate', updateProgress);
  playerA.addEventListener('ended', handleTrackEnd);
  playerB.addEventListener('ended', handleTrackEnd);
  
  setGreeting();
  loadSong(0);
}

function setGreeting() {
  const currentHour = new Date().getHours();
  const greetingText = document.getElementById('greeting-text');
  if (currentHour < 12) greetingText.innerText = "Good Morning ☀️";
  else if (currentHour < 18) greetingText.innerText = "Good Afternoon 🌤️";
  else greetingText.innerText = "Good Evening 🌙";
}

function setupSocialFeatures() {
  // 3D Tilt Effect on Album Art (Disabled on Mobile for better scrolling)
  const tiltContainer = document.getElementById('tilt-container');
  const coverContainer = document.getElementById('cover-container');
  
  mainPlayerCard.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return; 
    
    const rect = tiltContainer.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;
    
    const xRot = ((y / rect.height) - 0.5) * -30;
    const yRot = ((x / rect.width) - 0.5) * 30;
    
    if (x > -50 && x < rect.width + 50 && y > -50 && y < rect.height + 50) {
      coverContainer.style.transform = `rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.05)`;
    } else {
      coverContainer.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    }
  });
  
  mainPlayerCard.addEventListener('mouseleave', () => {
    coverContainer.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });

  const shareBtn = document.getElementById('share-btn');
  const modalOverlay = document.getElementById('dedication-overlay');
  const closeBtn = document.getElementById('close-modal-btn');
  const dedicateBtn = document.getElementById('send-dedication-btn');
  
  shareBtn.addEventListener('click', () => {
    document.getElementById('modal-track-name').innerText = mySongs[currentIndex].title;
    modalOverlay.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('show');
  });

  dedicateBtn.addEventListener('click', () => {
    const name = document.getElementById('dedicate-name').value || "someone special";
    const songName = mySongs[currentIndex].title;
    const message = `Hey ${name}! 💖 I was listening to "${songName}" by Priyanshu Shil and it made me think of you. Give it a listen!`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    modalOverlay.classList.remove('show');
  });
}

function setupAudioContext() {
  if(!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      
      bassFilter = audioCtx.createBiquadFilter();
      bassFilter.type = "lowshelf";
      bassFilter.frequency.value = 200;
      bassFilter.gain.value = 0;

      // Web Audio routing for visualization
      if (window.location.protocol !== 'file:') {
        sourceA = audioCtx.createMediaElementSource(playerA);
        sourceB = audioCtx.createMediaElementSource(playerB);
        
        sourceA.connect(bassFilter);
        sourceB.connect(bassFilter);
        bassFilter.connect(analyser);
        analyser.connect(audioCtx.destination);
      } else {
        console.warn("Running locally via file://. Web Audio visualizer routing skipped to ensure audio plays without CORS blockage.");
      }
      
      drawVisualizer();
    } catch (e) {
      console.warn("Audio context creation failed:", e);
    }
  }
}

function drawVisualizer() {
  requestAnimationFrame(drawVisualizer);
  if(!isPlaying) {
    mainPlayerCard.style.boxShadow = `0 15px 35px rgba(0, 0, 0, 0.5)`;
    return;
  }
  
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyser.getByteFrequencyData(dataArray);
  
  canvasCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
  const barWidth = (visualizerCanvas.width / bufferLength) * 2.5;
  let barHeight;
  let x = 0;
  let bassSum = 0;
  
  for(let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] / 2;
    canvasCtx.fillStyle = '#ffb4a2';
    canvasCtx.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight);
    x += barWidth + 1;
    
    if(i < 10) bassSum += dataArray[i];
  }

  const bassAvg = bassSum / 10;
  const glowIntensity = Math.max(0, (bassAvg - 100) / 4);
  if (glowIntensity > 5) {
    mainPlayerCard.style.boxShadow = `0 15px 35px rgba(0, 0, 0, 0.5), 0 0 ${glowIntensity + 10}px rgba(229, 152, 155, 0.5)`;
  } else {
    mainPlayerCard.style.boxShadow = `0 15px 35px rgba(0, 0, 0, 0.5)`;
  }
}

document.getElementById('overclock-btn').addEventListener('click', (e) => {
  if(audioCtx) {
    isOverclocked = !isOverclocked;
    e.currentTarget.classList.toggle('active-feature', isOverclocked);
    bassFilter.gain.value = isOverclocked ? 15 : 0;
  }
});

function renderPlaylist() {
  playlistDiv.innerHTML = ''; 
  mySongs.forEach((song, index) => {
    const songDiv = document.createElement('div');
    songDiv.className = 'song-item';
    songDiv.draggable = true;
    songDiv.dataset.index = index;
    songDiv.setAttribute('role', 'listitem');
    
    const isLikedClass = favoriteSongs.includes(song.title) ? 'fas liked' : 'far';
    
    songDiv.innerHTML = `
      <div class="song-info-wrapper">
        <i class="fas fa-grip-vertical drag-handle" aria-hidden="true"></i>
        <button class="like-btn-wrapper" aria-label="Like ${song.title}">
            <i class="${isLikedClass} fa-heart like-btn" data-title="${song.title}"></i>
        </button>
        <span>${song.title}</span> 
      </div>
    `;
    
    songDiv.onclick = (e) => {
      if(e.target.closest('.like-btn-wrapper') || e.target.classList.contains('drag-handle')) return;
      currentIndex = index;
      loadSong(currentIndex, true);
    };

    const heartBtn = songDiv.querySelector('.like-btn-wrapper');
    heartBtn.onclick = (e) => {
      e.stopPropagation();
      const icon = heartBtn.querySelector('.like-btn');
      const title = icon.getAttribute('data-title');
      
      if (favoriteSongs.includes(title)) {
        favoriteSongs = favoriteSongs.filter(t => t !== title);
        icon.className = 'far fa-heart like-btn';
      } else {
        favoriteSongs.push(title);
        icon.className = 'fas fa-heart like-btn liked';
      }
      try {
        localStorage.setItem('priyanshu_favorites', JSON.stringify(favoriteSongs));
      } catch (e) {
        console.warn("Could not save to local storage.");
      }
    };

    songDiv.addEventListener('dragstart', handleDragStart);
    songDiv.addEventListener('dragover', handleDragOver);
    songDiv.addEventListener('drop', handleDrop);
    songDiv.addEventListener('dragend', handleDragEnd);

    playlistDiv.appendChild(songDiv);
  });
  
  highlightCurrentTrack();
}

let draggedItem = null;
function handleDragStart(e) { draggedItem = this; setTimeout(() => this.classList.add('dragging'), 0); }
function handleDragOver(e) { e.preventDefault(); }
function handleDragEnd() { this.classList.remove('dragging'); }
function handleDrop(e) {
  e.preventDefault();
  if (this !== draggedItem) {
    let allItems = [...playlistDiv.querySelectorAll('.song-item')];
    let fromIndex = allItems.indexOf(draggedItem);
    let toIndex = allItems.indexOf(this);
    
    let movedSong = mySongs.splice(fromIndex, 1)[0];
    mySongs.splice(toIndex, 0, movedSong);
    
    if (currentIndex === fromIndex) currentIndex = toIndex;
    else if (fromIndex < currentIndex && toIndex >= currentIndex) currentIndex--;
    else if (fromIndex > currentIndex && toIndex <= currentIndex) currentIndex++;
    
    renderPlaylist();
  }
}

function loadSong(index, shouldPlay = false) {
  const song = mySongs[index];
  document.getElementById('now-playing-title').innerText = song.title;
  terminalText.innerText = `> Playing: ${song.title}`;
  
  activePlayer.pause();
  activePlayer.src = song.file_path;
  activePlayer.volume = parseFloat(volumeSlider.value) || 1;
  
  if (shouldPlay) {
    setupAudioContext();
    if(audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    
    let playPromise = activePlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn("Playback interrupted or missing file.", error);
      });
    }
    isPlaying = true;
  } else {
    isPlaying = false;
  }
  
  updateUIState();
  highlightCurrentTrack();
}

const advanceToNextSong = () => {
  if (isRepeat) {
    activePlayer.currentTime = 0;
    activePlayer.play();
  } else if (isShuffle) {
    currentIndex = Math.floor(Math.random() * mySongs.length);
    loadSong(currentIndex, true);
  } else {
    currentIndex = (currentIndex + 1) % mySongs.length;
    loadSong(currentIndex, true);
  }
};

function handleTrackEnd() { advanceToNextSong(); }

document.getElementById('next-btn').addEventListener('click', advanceToNextSong);

document.getElementById('prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + mySongs.length) % mySongs.length;
  loadSong(currentIndex, true);
});

playBtn.addEventListener('click', () => {
  setupAudioContext();
  if (isPlaying) {
    activePlayer.pause();
    isPlaying = false;
  } else {
    if(audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    if(!activePlayer.src) loadSong(currentIndex);
    
    let playPromise = activePlayer.play();
    if (playPromise !== undefined) {
        playPromise.catch(e => console.warn("Interrupted play."));
    }
    isPlaying = true;
  }
  updateUIState();
});

function updateUIState() {
  playBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
  isPlaying ? coverArt.classList.add('spin') : coverArt.classList.remove('spin');
}

function highlightCurrentTrack() {
  document.querySelectorAll('.song-item').forEach(el => el.classList.remove('active'));
  const currentEl = playlistDiv.querySelector(`[data-index="${currentIndex}"]`);
  if(currentEl) currentEl.classList.add('active');
}

function updateProgress() {
  if(this !== activePlayer) return;
  const { duration, currentTime } = this;
  if (isNaN(duration)) return;
  
  progressBar.style.width = `${(currentTime / duration) * 100}%`;

  const formatTime = (time) => `${Math.floor(time / 60)}:${Math.floor(time % 60).toString().padStart(2, '0')}`;
  currentTimeEl.innerText = formatTime(currentTime);
  durationEl.innerText = formatTime(duration);
}

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  activePlayer.currentTime = (clickX / width) * activePlayer.duration;
});

volumeSlider.addEventListener('input', (e) => {
  activePlayer.volume = e.target.value;
  volumeSlider.style.background = `linear-gradient(to right, #e5989b ${e.target.value * 100}%, rgba(255, 255, 255, 0.1) ${e.target.value * 100}%)`;
});

document.getElementById('mute-icon').addEventListener('click', () => {
  if (activePlayer.volume > 0) {
    activePlayer.dataset.savedVolume = activePlayer.volume;
    activePlayer.volume = 0;
    volumeSlider.value = 0;
  } else {
    activePlayer.volume = activePlayer.dataset.savedVolume || 1;
    volumeSlider.value = activePlayer.volume;
  }
  volumeSlider.style.background = `linear-gradient(to right, #e5989b ${volumeSlider.value * 100}%, rgba(255, 255, 255, 0.1) ${volumeSlider.value * 100}%)`;
});

function setupAmbientControls() {
  const rainInput = document.getElementById('ambient-rain');
  const keyboardInput = document.getElementById('ambient-keyboard');
  
  if (rainInput) {
    rainInput.addEventListener('input', (e) => {
      ambientRain.volume = e.target.value;
      e.target.value > 0 ? ambientRain.play() : ambientRain.pause();
    });
  }
  if (keyboardInput) {
    keyboardInput.addEventListener('input', (e) => {
      ambientKeyboard.volume = e.target.value;
      e.target.value > 0 ? ambientKeyboard.play() : ambientKeyboard.pause();
    });
  }
}

function setupModes() {
  document.getElementById('notes-toggle-btn').addEventListener('click', () => {
    document.getElementById('notes-overlay').classList.add('show');
    document.getElementById('notes-track-title').innerText = mySongs[currentIndex].title;
  });
  document.getElementById('close-notes-btn').addEventListener('click', () => {
    document.getElementById('notes-overlay').classList.remove('show');
  });

  let hackerModeActive = false;
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);
  let matrixInterval;

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0'; 
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0; 
      drops[i]++;
    }
  }

  document.getElementById('hacker-btn').addEventListener('click', (e) => {
    hackerModeActive = !hackerModeActive;
    e.currentTarget.classList.toggle('active', hackerModeActive);
    if (hackerModeActive) {
      canvas.style.opacity = '1';
      matrixInterval = setInterval(drawMatrix, 35);
    } else {
      canvas.style.opacity = '0';
      clearInterval(matrixInterval);
    }
  });

  let romanceMode = false;
  let heartInterval;
  const heartsContainer = document.getElementById('hearts-container');
  document.getElementById('romance-btn').addEventListener('click', (e) => {
    romanceMode = !romanceMode;
    e.currentTarget.classList.toggle('active', romanceMode);
    if (romanceMode) heartInterval = setInterval(createHeart, 400);
    else clearInterval(heartInterval);
  });

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    const emojis = ['❤️', '💖', '💕', '💘', '✨'];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
    heartsContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 7000);
  }
}

function setupThemes() {
  const themeSelect = document.getElementById('theme-select');
  const bgColorPicker = document.getElementById('bg-color-picker');

  themeSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === 'custom' && bgColorPicker) {
      bgColorPicker.style.display = 'inline-block';
      bgColorPicker.click();
    } else {
      if (bgColorPicker) bgColorPicker.style.display = 'none';
      if (val === 'romantic') document.body.style.background = 'linear-gradient(-45deg, #0a0508, #2a111a, #140b0e, #050203)';
      else if (val === 'cyber') document.body.style.background = 'linear-gradient(-45deg, #020c1b, #0a192f, #112240, #050b14)';
      else if (val === 'synthwave') document.body.style.background = 'linear-gradient(-45deg, #12051f, #230b3a, #1a082b, #0d0317)';
    }
  });
  
  if (bgColorPicker) {
    bgColorPicker.addEventListener('input', (e) => {
      document.body.style.background = e.target.value;
    });
  }
}

document.getElementById('search-input').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('.song-item').forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(term) ? 'flex' : 'none';
  });
});
