const btn = document.querySelector("#btn");
const textarea = document.querySelector(".textarea");

function showNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  textarea.innerHTML = ""; // Clear existing content
  notes.forEach((note) => {
    const textbox = document.createElement("div");
    textbox.classList.add("textbox");
    textbox.innerHTML = `
            <textarea rows="10" cols="60" placeholder="Enter Your Notes" id="notes">${note}</textarea>
            <img src="images/delete.png" width="20px" class="delete">
        `;
    textarea.appendChild(textbox);
  });
}

function updateStorage() {
  const notes = Array.from(textarea.querySelectorAll("textarea")).map(
    (note) => note.value
  );
  localStorage.setItem("notes", JSON.stringify(notes));
}

window.addEventListener("load", () => {
  showNotes();
});

btn.addEventListener("click", () => {
  const textbox = document.createElement("div");
  textbox.classList.add("textbox");
  textbox.innerHTML = `
        <textarea rows="10" cols="60" placeholder="Enter Your Notes" id="notes"></textarea>
        <img src="images/delete.png" width="20px" class="delete">
    `;
  textarea.appendChild(textbox);
  updateStorage();
});

textarea.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    updateStorage();
  }
});

textarea.addEventListener("input", () => {
  updateStorage();
});
