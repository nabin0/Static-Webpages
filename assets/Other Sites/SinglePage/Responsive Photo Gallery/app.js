var images = document.querySelectorAll(".image img");
var modalBox = document.querySelector("#show-box");
var modalImg = document.querySelector(".show-box img");
var closeBtn = document.querySelector(".close-btn");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modalBox.classList.add("appear");

    closeBtn.addEventListener("click", () => {
      modalBox.classList.remove("appear");
    });
  });
});
