



// A simple task list in JavaScript

// Create an empty array to hold all the tasks addeds
const tasks = [];

// Make a function to display the current task list that is added 
function displayTasks() {
  if (tasks.length === 0) {
    console.log("No tasks to display.");
  } else {
    console.log("Current tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

// Create a function to add a task to the end of the task list 
function addTask() {
  const newTask = prompt("Enter a new task:");
  tasks.push(newTask);
  console.log(`"${newTask}" has been added to the task list.`);
}

// Create a function to remove a task from the beginning of the task list
function removeFirstTask() {
  if (tasks.length === 0) {
    console.log("No tasks to remove.");
  } else {
    const removedTask = tasks.shift();
    console.log(`"${removedTask}" has been removed from the beginning of the task list.`);
  }
}

// Create a function to remove a task from the end of the task list
function removeLastTask() {
  if (tasks.length === 0) {
    console.log("No tasks to remove.");
  } else {
    const removedTask = tasks.pop();
    console.log(`"${removedTask}" has been removed from the end of the task list.`);
  }
}

// Create a function to remove a task from a specific position in the task list
function removeTask() {
  if (tasks.length === 0) {
    console.log("No tasks to remove.");
  } else {
    const index = parseInt(prompt("Enter the index of the task to remove:")) - 1;
    if (index < 0 || index >= tasks.length) {
      console.log("Invalid index.");
    } else {
      const removedTask = tasks.splice(index, 1)[0];
      console.log(`"${removedTask}" has been removed from the task list.`);
    }
  }
}

// Going back to the main program loop
let choice;
do {
  console.log("\nChoose an option:");
  console.log("1. Add a task");
  console.log("2. Remove a task from the beginning");
  console.log("3. Remove a task from the end");
  console.log("4. Remove a task from a specific position");
  console.log("5. Display the task list");
  console.log("6. Quit");
  choice = parseInt(prompt("Enter your choice (1-6):"));
  switch (choice) {
    case 1:
      addTask();
      break;
    case 2:
      removeFirstTask();
      break;
    case 3:
      removeLastTask();
      break;
    case 4:
      removeTask();
      break;
    case 5:
      displayTasks();
      break;
    case 6:
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid choice.");
  }
} while (choice !== 6);

