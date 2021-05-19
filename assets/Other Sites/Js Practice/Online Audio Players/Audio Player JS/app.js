let menuSlide = document.getElementById("menu-cont");
var menuBar = document.getElementById("menu-bar");
var closeBtn = document.getElementById("close-btn");
function open() {
  menuSlide.style.display = "flex";
  menuSlide.style.transform = "translateX(0px)";
}
function close() {
  menuSlide.style.display = "none";
  menuSlide.style.transform = "translatex(-500px)";
}

menuBar.addEventListener("click", open);
closeBtn.addEventListener("click", close);

let fillBar = document.querySelector(".fill");
let audios = ["musica/aud-1.mp3"];
let covers = ["1.jpg", "26.jpg", "31.jpg"];

//------------ Object of audio---------
let audio = new Audio();
let currentSong = 0;

//---------- On window load play song auto--------------
window.onload = playSong;

function playSong() {
  audio.src = audios[currentSong];
    audio.play();
}
// -------PLay Pause SYstem=----------
function tooglePlayPause() {
  if (audio.paused) {
    audio.play();
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    audio.pause();
    playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
  }
}
// -----------SeekBar-------------
audio.addEventListener("timeupdate", function () {
  let position = audio.currentTime / audio.duration;
  fillBar.style.width = position * 100 + "%";
});

// ---------Previous And next Button-------

// ---------Volume button-------
function upVolume() {
  audio.volume += 0.2;
}

function downVolume() {
  audio.volume -= 0.2;
}

// ===========Mute Unmute==========
let volUp = document.querySelector(".up-volume");
volUp.addEventListener("click", function () {
  if (audio.volume == 1) {
    audio.volume = 0;
    document.querySelector(".up-volume i").className = "fa fa-volume-mute";
  } else {
    audio.volume = 1;
    document.querySelector(".up-volume i").className = "fa fa-volume-up";
  }
});
