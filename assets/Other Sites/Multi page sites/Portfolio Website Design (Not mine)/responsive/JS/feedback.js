// Email Validation
function validEmail() {
  let emailForm = document.getElementById("form-mail");
  let email = document.getElementById("emailname").value;
  let text = document.getElementById("text");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)) {
    //   valid invalid class t add cross and tick icon in the input field
    emailForm.classList.add("valid");
    emailForm.classList.remove("invalid");
    text.innerHTML = "Your Email Address Is Valid.";
    text.style.color = "green";
  } else {
    emailForm.classList.remove("valid");
    emailForm.classList.add("invalid");
    text.innerHTML = "Your Email Address Is InValid.";
    text.style.color = "red";
  }

  if (email == "") {
    emailForm.classList.remove("valid");
    emailForm.classList.remove("invalid");
    text.innerHTML = "Please Enter Your Email.";
    text.style.color = "gray";
  }
}

let emailForm = document.getElementById("form-mail");
emailForm.addEventListener("keyup", validEmail);



// NAme Validation

function nameValid() {
  let nameForm = document.getElementById("form-name");
  let nane = document.getElementById("name").value;
  let text = document.getElementById("text-name");
//   only alphabet
//   let pattern = /^[A-Za-z]+$/; 

// alphabet with space

let pattern = /^[a-zA-Z ]*$/;
  if (nane.match(pattern)) {
    text.innerHTML = "";
    text.style.color = "";
  } else {
    text.innerHTML = "Invalid Name!!!";
    text.style.color = "red";
  }

  if (nane == "") {
    text.innerHTML = "Please Enter Your Name.";
    text.style.color = "gray";
  }
}

let nameForm = document.getElementById("form-name");
nameForm.addEventListener("keyup", nameValid);



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