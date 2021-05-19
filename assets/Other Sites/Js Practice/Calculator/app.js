let screen = document.querySelector(".screen");
let screenValue = "";
let nums = document.querySelectorAll("span");

nums.forEach((items) => {
  items.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "=") {
      screen.value = ` = ${eval(screenValue)}`;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
});
