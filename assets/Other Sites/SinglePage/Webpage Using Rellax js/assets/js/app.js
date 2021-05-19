let rellax = new Rellax('.rellax');

ScrollOut({
    threshold: .7
})

let aniNav = document.getElementById('animated-nav');
let aniNavBtn = document.getElementById('custom-btn');
aniNavBtn.addEventListener('click', () => aniNav.classList.toggle('active'));