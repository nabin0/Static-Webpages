let audios = ["assets/music/1.mp3", "assets/music/2.mp3", "assets/music/3.mp3", "assets/music/4.mp3"];
let cover = ["assets/covers/1.jpeg", "assets/covers/2.jpeg", "assets/covers/3.jpeg", "assets/covers/4.jpg"];
let fillBar = document.querySelector('.fill');
let seekBar = document.querySelector('.seekBar');
let timeShow = document.querySelector('.music-info p');
let playControls = document.querySelector('.play-controls');
let musicControlBtn = document.querySelector('.music-control-btns');
let playControlSize = document.querySelector('#list-7');
let musicList = document.querySelectorAll('.music-icon-list');
let currentImage = document.getElementById('display-current-theme');
let playPauseBtn = document.getElementById('playPause');


// New Audio Object
let audio = new Audio();
let currentAudio = 0;
let nowImage = 0;


// This Plays Audio While Windows Loads
window.onload = playAudio;


// Function To play Audio
function playAudio() {
    audio.src = audios[currentAudio];
    currentImage.src = cover[currentAudio];
    // audio.play();
}


// Play On Click
function playOnClickImage(n) {
    audio.setAttribute('src', "" + audios[n] + "");
    let playPauseBtn = document.getElementById('playPause');
    audio.play();
    playPauseBtn.src = 'assets/icons/pause.png';
    currentImage.src = `${cover[n]}`;  // in Case it not work use below line
    // currentImage.style.background=  `url("${cover[n]}")`;

}


// Togggle Play Pause
function togglePlayPause() {
    let playPauseBtn = document.getElementById('playPause');
    if (audio.paused) {
        audio.play();
        playPauseBtn.src = 'assets/icons/pause.png';
    }
    else {
        audio.pause();
        playPauseBtn.src = 'assets/icons/play.png';
    }
}


// SeekBAr Control Audio

seekBar.addEventListener('click', clickedBar, false);
function clickedBar(e) {
    let playControls = document.getElementById('play-controls');
    let playControlsOffset = playControls.offsetLeft;
    let seekBarSize = seekBar.offsetWidth;
    console.log(seekBarSize)

    if (!audio.ended) {
        let mousex = e.pageX - seekBar.offsetLeft - playControlsOffset;
        let newTime = (mousex * audio.duration) / seekBarSize;
        let percentage = mousex / seekBarSize;
        audio.currentTime = newTime;
        fillBar.style.width = mousex + 'px';
        let test = e.pageX
    }
}



// SeekBar

audio.addEventListener('timeupdate', function () {
    let currentPosition = audio.currentTime / audio.duration
    fillBar.style.width = currentPosition * 100 + '%';
    let currentPosFormat = changeTimeFormat(Math.round(audio.currentTime));
    let musikDurationFormat = changeTimeFormat(audio.duration);
    timeShow.innerHTML = currentPosFormat + '/' + musikDurationFormat
})





// Change Time Format
function changeTimeFormat(time) {
    let hours = Math.floor(time / 3600);
    let mins = Math.floor((time - (hours * 3600)) / 60);
    let secs = Math.floor(time - (hours * 3600) - (mins * 60));
    if (secs < 10) {
        secs = '0' + secs
    }
    return `${mins}:${secs}`
}


// Next Music
function nextAudio() {
    currentAudio++;
    nowImage++;
    playPauseBtn.src = 'assets/icons/pause.png';
    if (currentAudio >= audios.length) {
        currentAudio = 0;
    }
    if (nowImage >= cover.length) {
        nowImage = 0;
    }
    playAudio();
    audio.play();
}


// Previous Songa

function prevAudio() {
    currentAudio--;
    playPauseBtn.src = 'assets/icons/pause.png'
    nowImage--;
    if (currentAudio <= audios.length) {
        currentAudio = 0;
    }
    if (nowImage <= cover.length) {
        nowImage = 0;
    }
    playAudio();
    audio.play();
}


// Increase volume

function volumeUp() {
    audio.volume += 0.25;
}


// Decrease volume

function volumeDown() {
    audio.volume -= 0.25;
}


// Volume Mute System

function hardVolume() {
    let volImg = document.getElementById('toggleMuteUp');
    if (audio.volume > 0) {
        audio.volume = 0;
        volImg.src = 'assets/icons/mute.png';
    } else {
        volImg.src = 'assets/icons/volume.png';
        audio.volume = 1;
    }
}


// Control Panel Size

function cpSize() {
    if (playControls.style.visibility != 'hidden') {
        playControls.style.visibility = 'hidden';
    }
    else {
        playControls.style.visibility = 'visible';

    }
}

function playControlSizeGiver() {
    if (playControls.style.display != 'none') {
        playControls.style.display = 'none';
    }
    else {
        playControls.style.display = 'flex';

    }
}