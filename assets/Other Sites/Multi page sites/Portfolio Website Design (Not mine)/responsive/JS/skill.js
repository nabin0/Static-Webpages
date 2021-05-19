let i = 0,
  text;
text = "I Believe In";

function typing() {
  if (i < text.length) {
    document.getElementById("top-left-h2").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 400);
  }
}

typing();

let j = -1,
  text1;
text1 = "Code.";

function typingOne() {
  if (j < text1.length) {
    document.getElementById("bottom-right-h2").innerHTML += text1.charAt(j);
    j++;
    setTimeout(typingOne, 900);
  }
}

typingOne();


// preloader


window.addEventListener('load', function(){
  document.getElementById("preloader").style.visibility = "hidden";
});

// menuToggle

let navToggle = document.getElementById('navToggle');
let navIcons = document.getElementById('nav-icons');
let toggled = false;

navToggle.addEventListener('click', toggleMenu);

function toggleMenu(){
  if (!toggled){
    toggled = true;
    navIcons.style.display = 'flex';
  }
  else{
    toggled = false;
    navIcons.style.display = 'none';
  }
}