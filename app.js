// ==========================================
// 🔒 BASIC CLIENT-SIDE AUTHENTICATION
// Base64 encoding obscures the password from casual inspection.
// ==========================================
const ENCODED_PASSWORD = btoa("Priyanshu2026");

// Complete 20 Track list with Sync Lyrics Support
let mySongs = [
  { 
    title: "Ab Keh Bhi Do Na (v1)", 
    file_path: "Music/_💖 _Ab Keh Bhi Do Na_ 💖_ (1)_011821.mp3", 
    lyrics: [
      { time: 0, text: "> Init script: Preparing vocal tracks..." },
      { time: 10, text: "> Please confess your love..." },
      { time: 25, text: "> Error: Heartbeat skipping." }
    ] 
  },
  { title: "Ab Keh Bhi Do Na (v2)", file_path: "Music/_💖 _Ab Keh Bhi Do Na_ 💖__011709.mp3", lyrics: [] },
  { 
    title: "Code Mera Dil", 
    file_path: "Music/_Code Mera Dil_ (Techy Love Song) 💻💘_.mp3",
    lyrics: [
      { time: 0, text: "> Init script: Loading emotions..." },
      { time: 5, text: "> Establishing connection to your heart..." },
      { time: 15, text: "> If (love == true) { compile(); }" }
    ]
  },
  { title: "Tera Haath Mera Haath (v1)", file_path: "Music/_Tera Haath Mera Haath_ (1).mp3", lyrics: [] },
  { title: "Tera Haath Mera Haath (v2)", file_path: "Music/_Tera Haath Mera Haath_.mp3", lyrics: [] },
  { title: "Tujhse Kahan Juda Hoon Main (v1)", file_path: "Music/_Tujhse Kahan Juda Hoon Main_ (Love Song) ❤️🎶 (1).mp3", lyrics: [] }, 
  { title: "Tujhse Kahan Juda Hoon Main (v2)", file_path: "Music/_Tujhse Kahan Juda Hoon Main_ (Love Song) ❤️🎶.mp3", lyrics: [] }, 
  { title: "Meri Duniya Hai Tu (v1)", file_path: "Music/💖 _Meri Duniya Hai Tu_ 💖 (1)_012029.mp3", lyrics: [] },
  { title: "Meri Duniya Hai Tu (v2)", file_path: "Music/💖 _Meri Duniya Hai Tu_ 💖_011926.mp3", lyrics: [] },
  { title: "Sirf Tum (v1)", file_path: "Music/💖 _Sirf Tum_ 💖 (1)_011328.mp3", lyrics: [] },
  { title: "Sirf Tum (FLAC 1)", file_path: "Music/💖 _Sirf Tum_ 💖_011026 (1).flac", lyrics: [] },
  { title: "Sirf Tum (v2)", file_path: "Music/💖 _Sirf Tum_ 💖_011026.mp3", lyrics: [] },
  { title: "Tere Bina (v1)", file_path: "Music/💖 _Tere Bina_ 💖_ (1)_011133.mp3", lyrics: [] },
  { title: "Tere Bina (FLAC)", file_path: "Music/💖 _Tere Bina_ 💖__011238.flac", lyrics: [] },
  { title: "Tere Bina (v2)", file_path: "Music/💖 _Tere Bina_ 💖__011238.mp3", lyrics: [] },
  { title: "Firewall Pyaar", file_path: "Music/3. _Firewall Pyaar_ (Heartbreak Song) 💔🔥_.mp3", lyrics: [] }, 
  { title: "Reboot Dil Ka", file_path: "Music/4. _Reboot Dil Ka_ (Confession Song) 🌅❤️.mp3", lyrics: [] },
  { title: "Love Song (v1)", file_path: "Music/Love song (1)_034625.mp3", lyrics: [] },
  { title: "Love Song (v2)", file_path: "Music/Love song (2)_034450.mp3", lyrics: [] },
  {
    title: "Sukoon (The Anchor)",
    file_path: "Music/Sukoon(The Anchor).mp3",
    lyrics: [
      { time: 0, text: "> Ye shor bhare campus mein apna ek alag frame hai..." },
      { time: 5, text: "> Bina lafzon ke jo chal raha ek alag hi game hai..." },
      { time: 10, text: "> Tasveer ke us ek pal mein jab faasle the mite..." },
      { time: 15, text: "> Bina dare jab tere mere kandhe the jude..." },
      { time: 20, text: "> Wahi samajh gaya tha main ye sirf aadat nahi..." },
      { time: 25, text: "> Jo sukoon tere paas hai wo aur kahin nahi..." },
      { time: 30, text: "> Tu hai roshan aag si main thehra hui zameen..." },
      { time: 35, text: "> Teri befikar hasi mein milta hai sukoon yahin..." },
      { time: 40, text: "> Meri khamosh duniya ko teri hi zarurat hai..." },
      { time: 45, text: "> Ye jo bhi hai apne beech badi khoobsurat hai..." },
      { time: 50, text: "> Ye ishq nahi aasaan iski neev badi gehri hai..." },
      { time: 55, text: "> Meri is chup mein ek lambi kahani thehri hai..." },
      { time: 60, text: "> Tu bas aage badhna har raasta main banaunga..." },
      { time: 65, text: "> Tera anchor banke har toofan sambhalunga..." },
      { time: 70, text: "> Naya chapter hai ye aur nayi hai shuruaat..." },
      { time: 75, text: "> Pareshan mat hona chhodna mat mera saath..." },
      { time: 80, text: "> Design ka ho ya duniya ka tera stress ab mera hai..." },
      { time: 85, text: "> In anjaan raaston par tu bilkul na akela hai..." },
      { time: 90, text: "> Main structure banaunga tu bas isme rang bharna..." },
      { time: 95, text: "> Main khada hoon peeche tu aage badhne se mat darna..." },
      { time: 100, text: "> Log dhundte hai manzil mujhe tera safar pasand hai..." },
      { time: 105, text: "> In uljhe hue raaston mein tera asar pasand hai..." },
      { time: 110, text: "> Ek alag hi frequency hai jo sirf hum sunte hai..." },
      { time: 115, text: "> Bheed mein rehkar bhi bas apni duniya bunte hai..." },
      { time: 120, text: "> Meri khamoshi aur teri muskaan..." },
      { time: 125, text: "> Shor mein sukoon bas tu aur main..." },
      { time: 130, text: "> Baaki sab baad mein..." }
    ]
  }
];

let currentIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let favoriteSongs = [];
let fadeInterval = null; 

// Safely access local storage
try {
  favoriteSongs = JSON.parse(localStorage.getItem('priyanshu_favorites')) || [];
} catch (e) {
  console.warn("Local storage disabled or unavailable. Favorites will not persist.");
}

const playerA = document.getElementById('audio-player-a');
const playerB = document.getElementById('audio-player-b');
let activePlayer = playerA; let inactivePlayer = playerB;
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

// -------------------------
// Interactive Social Features
// -------------------------
function setupSocialFeatures() {
<<<<<<< Updated upstream
=======
  // 1. 3D Tilt Effect on Album Art (Disabled on Mobile for better scrolling)
>>>>>>> Stashed changes
  const tiltContainer = document.getElementById('tilt-container');
  const coverContainer = document.getElementById('cover-container');
  
  mainPlayerCard.addEventListener('mousemove', (e) => {
<<<<<<< Updated upstream
    if (window.innerWidth <= 768) return; 
=======
    if (window.innerWidth <= 768) return; // Prevent tilt effect on phones
>>>>>>> Stashed changes
    
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

// -------------------------
// Web Audio & Visualizer 
// -------------------------
function setupAudioContext() {
  if(!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    
    bassFilter = audioCtx.createBiquadFilter();
    bassFilter.type = "lowshelf";
    bassFilter.frequency.value = 200;
    bassFilter.gain.value = 0;

    sourceA = audioCtx.createMediaElementSource(playerA);
    sourceB = audioCtx.createMediaElementSource(playerB);
    
    sourceA.connect(bassFilter);
    sourceB.connect(bassFilter);
    bassFilter.connect(analyser);
    analyser.connect(audioCtx.destination);
    
    drawVisualizer();
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

// -------------------------
// Playlist & Drag-and-Drop
// -------------------------
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

// -------------------------
// Playback (Immediate Transition)
// -------------------------
function loadSong(index, shouldPlay = false) {
  const song = mySongs[index];
  document.getElementById('now-playing-title').innerText = song.title;
  terminalText.innerText = `> Loading data for ${song.title}...`;
  
  // 1. Instantly stop the currently playing song
  activePlayer.pause();
  
  // 2. Load the new track into the active player
  activePlayer.src = song.file_path;
  activePlayer.volume = parseFloat(volumeSlider.value) || 1;
  
  if (shouldPlay) {
    setupAudioContext();
    if(audioCtx.state === 'suspended') audioCtx.resume();
    
    // 3. Play the new song immediately
    let playPromise = activePlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn("Playback interrupted. User skipped too quickly.");
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
    if(audioCtx.state === 'suspended') audioCtx.resume();
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

// -------------------------
// Sync Lyrics & Progress
// -------------------------
function updateProgress() {
  if(this !== activePlayer) return;
  const { duration, currentTime } = this;
  if (isNaN(duration)) return;
  
  progressBar.style.width = `${(currentTime / duration) * 100}%`;

  const formatTime = (time) => `${Math.floor(time / 60)}:${Math.floor(time % 60).toString().padStart(2, '0')}`;
  currentTimeEl.innerText = formatTime(currentTime);
  durationEl.innerText = formatTime(duration);

  const song = mySongs[currentIndex];
  if(song.lyrics && song.lyrics.length > 0) {
    const currentLine = song.lyrics.slice().reverse().find(l => currentTime >= l.time);
    if (currentLine && terminalText.innerText !== currentLine.text) {
      terminalText.innerText = currentLine.text;
    }
  } else {
    terminalText.innerText = "> No lyric data found for this protocol.";
  }
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

// -------------------------
// Visual Toggles & Themes
// -------------------------
function setupModes() {
  document.getElementById('notes-toggle-btn').addEventListener('click', () => {
    document.getElementById('notes-overlay').classList.add('show');
    document.getElementById('notes-track-title').innerText = mySongs[currentIndex].title;
  });
  document.getElementById('close-notes-btn').addEventListener('click', () => {
    document.getElementById('notes-overlay').classList.remove('show');
  });

  // Hacker Mode
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

  // Romance Mode
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