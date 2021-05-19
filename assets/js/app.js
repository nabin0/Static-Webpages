let themeMode = document.getElementById("themeMode");
let themeCtrl = document.getElementById("themeCtrl");
var themeBox = document.getElementById("theme");
let hamburgerMenu = document.getElementById("hamburgerMenu");
let navList = document.getElementById("navList");



// Menu Event
hamburgerMenu.addEventListener("click", function () {
  // navList.classList.toggle("showHideNavList");

  if (navList.classList.contains("showHideNavList")){
    navList.classList.add("navList");
    navList.classList.remove("showHideNavList");
  }
  else if (navList.classList.contains("navList")){
    navList.classList.add("showHideNavList");
    navList.classList.remove("navList");
  }
});

// Toggle Theme
themeMode.addEventListener("click", (e) => {
  if (document.documentElement.hasAttribute("theme")) {
    document.documentElement.removeAttribute("theme");
    themeMode.innerHTML = ` <i class="fa fa-moon-o" id="themeMode">Dark</i>`;
  } else {
    document.documentElement.setAttribute("theme", "dark");
    themeMode.innerHTML = ` <i class="fa fa-sun-o" id="themeMode">Light</i>`;
  }
});

// Theme Box Controller
function ctrlTheme() {
  if (themeCtrl.classList.contains("fa-angle-down")) {
    themeBox.style.right = "-60px";
    themeCtrl.classList.add("fa-angle-up");
    themeCtrl.classList.remove("fa-angle-down");
  } else if (themeCtrl.classList.contains("fa-angle-up")) {
    themeBox.style.right = "-20px";
    themeCtrl.classList.add("fa-angle-down");
    themeCtrl.classList.remove("fa-angle-up");
  }
}
themeCtrl.addEventListener("click", ctrlTheme);


// Animated Navigation Bar
let aniNav = document.getElementById('animated-nav');
let aniNavBtn = document.getElementById('custom-btn');
aniNavBtn.addEventListener('click', () => aniNav.classList.toggle('active'));