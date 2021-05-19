function generate(){
var r1 = document.querySelector(".r-one").value;
var g1 = document.querySelector(".g-one").value;
var b1 = document.querySelector(".b-one").value;
var r2 = document.querySelector(".r-Two").value;
var g2 = document.querySelector(".g-Two").value;
var b2 = document.querySelector(".b-Two").value;
var angle = document.querySelector(".angle-inpt").value;

let comd = `linear-gradient(${angle}deg, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
document.getElementById("show-screen").style.background= comd;
document.getElementById("show-txt").innerText = comd;
}