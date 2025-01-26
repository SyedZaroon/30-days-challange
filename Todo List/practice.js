const todoBody = document.querySelector(".todo-body");
const textInput = document.querySelector("#text");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = textInput.value.trim();

  if (taskText) {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
                    <div class="task-right">
                        <p class="tasklist">${taskText}</p>
                    </div>
                    <i class="fa-solid fa-xmark task-left"></i>
                `;
    todoBody.appendChild(newTask);
    textInput.value = "";
  }
});

todoBody.addEventListener("click", (e) => {
  if (e.target.closest(".task-right")) {
    e.target.closest(".task-right").classList.toggle("check");
  }

  if (e.target.classList.contains("task-left")) {
    const task = e.target.closest(".task");
    if (task) {
      task.remove();
    }
  }
});
