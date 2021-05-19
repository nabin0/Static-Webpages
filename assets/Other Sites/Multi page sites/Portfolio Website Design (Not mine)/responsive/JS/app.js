// ===Typing Effect========

let i = 0,
  text;
text = "Nabin Bhatt";
function typing() {
  if (i < text.length) {
    document.getElementById("body-intro-name").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 600);
  }
}
typing();

// loading preloader

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