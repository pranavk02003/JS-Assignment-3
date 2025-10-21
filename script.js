const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const deleteAllBtn = document.getElementById("deleteAllBtn");

// Add task
addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="btn btn-sm btn-danger delete-btn">Delete</button>
    </div>
  `;

  // Toggle completion on click
  li.addEventListener("click", (e) => {
    if (e.target.classList.contains("task-text")) {
      li.classList.toggle("completed");
    }
  });

 

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
});

// Delete all tasks
deleteAllBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});