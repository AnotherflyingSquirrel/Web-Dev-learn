const nodefs = require("fs");

const filePath1 = "./data.txt";
const filePath2 =
  "C:/DEV/web-dev-learn/ChaiAurCode_complete_web_dev_course/Code/NodeJS/Tasks.json";

const command = process.argv[2];
const argument = process.argv[3];

let taskList = [];
let whileCount = 0;
if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  displayTasks();
} else if (command === "remove") {
  removeTask(argument);
} else {
  console.log("Invalid command. Please use 'add', 'list', or 'remove'...");
}
function removeTask(task) {
  if (!task) {
    console.error("Please provide a task to remove.");
    return;
  }
  try {
    whileCount = 0;
    while (loadTasks() && whileCount < 10) {
      whileCount++;
    }
    let taskIndex = -1;
    if (typeof task === "number") {
      const taskString = task.toString();
      taskIndex = taskList.findIndex((item) => item.task === taskString);
      if (isNaN(taskIndex) || taskIndex < 0 || taskIndex > taskList.length) {
        taskIndex = task - 1; // Convert to zero-based index
      }
    } else if (typeof task === "string") {
      taskIndex = taskList.findIndex((item) => item.task === task);
    }
    if (isNaN(taskIndex) || taskIndex < 0 || taskIndex > taskList.length) {
      console.error("Invalid task provided to remove.");
      return;
    }
    // Remove the task from the list
    taskList.splice(taskIndex, 1);
    whileCount = 0;
    while (!saveToLocalStorage() && whileCount < 10) {
      whileCount++;
    }
    console.log(`Task "${task}" removed successfully.`);
  } catch (e) {
    console.error("Error removing task:", e);
    return;
  }
}

function displayTasks() {
  whileCount = 0;
  while (!loadTasks() && whileCount < 10) {
    whileCount++;
  }
  if (taskList.length === 0) {
    console.log("No tasks available.");
    return;
  }

  console.log("Current Tasks:");
  taskList.forEach((item, index) => {
    console.log(`${index + 1}. ${item.task} [${item.completed ? "✓" : "✗"}]`);
  });
}

function addTask(task) {
  if (!task) {
    console.error("Please provide a task to add.");
    return;
  }

  whileCount = 0;
  while (!loadTasks() && whileCount < 10) {
    whileCount++;
  }
  // const localTaskData = loadTasks();

  taskList.push({ task: task.toString(), completed: false });
  whileCount = 0;
  while (!saveToLocalStorage() && whileCount < 10) {
    whileCount++;
  }
  console.log(`Task "${task}" added successfully.`);
}

function saveToLocalStorage() {
  try {
    nodefs.writeFileSync(filePath2, JSON.stringify(taskList, null, 2), "utf-8");
    return true;
  } catch (e) {
    console.error("Error saving tasks to local storage:", e);
    return false;
  }
}

function loadTasks() {
  try {
    const data = nodefs.readFileSync(filePath2, "utf-8").toString();
    if (data.trim() === "") {
      taskList = [];
      return true;
    }
    taskList = JSON.parse(data);
    return true;
  } catch (e) {
    console.error("Error reading tasks:", e);
    taskList = [];
    return false;
  }
}
