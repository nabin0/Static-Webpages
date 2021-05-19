let container = document.getElementById("container");
let para = document.querySelector("p");

// create editable element
let editDiv = document.createElement("div");
editDiv.setAttribute(
  "style",
  "border: 2px solid red; height:200px; width: 200px;"
);
editDiv.className = "elemdiv";
editDiv.id = "elem";

// TextNode Condition
let value = localStorage.getItem("text");
let text;
if (value == null) {
  text = document.createTextNode("Im editable.");
} else {
  text = document.createTextNode(value);
}

// Append TextNode
editDiv.appendChild(text);

// Insert Created element
container.insertBefore(editDiv, para);

// Click Event on Created  element
editDiv.addEventListener("click", function () {
  let countTxtarea = document.getElementsByClassName("textarea").length;

  if (countTxtarea == 0) {
    let html = editDiv.innerHTML;
    editDiv.innerHTML = `<textarea class='textarea' id='textarea'>${html}</textarea>`;
  }

  // Blur Event to save edited data
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    editDiv.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});
