const form = document.getElementById("to-do-form");
const input = document.getElementById("to-do-input");
const list = document.getElementById("to-do-list");

form.addEventListener("submit", event => {
  event.preventDefault();

  const newTask = input.value;

  if (newTask) {
    const newLi = document.createElement("li");
    newLi.innerHTML = newTask;
    list.appendChild(newLi);
    input.value = "";
  }
});
