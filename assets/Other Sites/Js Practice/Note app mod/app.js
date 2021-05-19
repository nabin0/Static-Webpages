showNotes();

let addBtn = document.getElementById("add-btn");
// Add Notes
addBtn.addEventListener("click", function () {
  let addNote = document.getElementById("addNote");
  let addTitle = document.getElementById("title");
  let notes = localStorage.getItem("storageNotes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let newObj = {
    title: addTitle.value,
    text: addNote.value,
  };
  notesObj.push(newObj);
  localStorage.setItem("storageNotes", JSON.stringify(notesObj));
  addNote.value = "";
  console.log(notesObj);
  showNotes();
});

function showNotes() {
  let html = "";

  let notes = localStorage.getItem("storageNotes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.forEach(function (element, index) {
    html += `
    <div class="notes">

    <div class="title h2">${element.title}  </div>
    <p class="noteBody h2">${element.text}</p>
    <button onclick="deleteNote(this.index)" class="btn del-btn" id="${index}">Delete</button></div>
    `;
  });

  let noteElem = document.getElementById("note");
  if (notesObj.length != 0) {
    noteElem.innerHTML = html;
  } else {
    noteElem.innerHTML = ` Please add some notes`;
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("storageNotes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("storageNotes", JSON.stringify(notesObj));
  showNotes();
}

// Search functionality

let searchTxt = document.getElementById("search-input");

searchTxt.addEventListener("input", function () {
  let searchValue = searchTxt.value;
  let notesCard = document.getElementsByClassName("notes");
  Array.from(notesCard).forEach(function (element) {
    let notesText = element.getElementsByTagName("p")[0].innerText;
    if (notesText.includes(searchValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
