const fs = import("node:fs");
const os = import("node:os");
const path = import("node:path");

const command = process.argv[2].toString().toLowerCase();
const argument = process.argv[3].toString();

let whilecnt = 0;

// const task = fs.
function executeCommand(command, argument) {
  if (command === "add") {
    whilecnt = 0;
    while (whilecnt < 10 && loadLocalStorage()) {
      whilecnt++;
    }
    addElement(argument);
    whilecnt = 0;
    while (whilecnt < 10 && saveToLocalStorage()) {
      whilecnt++;
    }
  } else if (command === "remove") {
    whilecnt = 0;
    while (whilecnt < 10 && loadLocalStorage()) {
      whilecnt++;
    }
    removeElement(argument);
    whilecnt = 0;
    while (whilecnt < 10 && saveToLocalStorage()) {
      whilecnt++;
    }
  } else if (command === "list") {
    try {
      if (loadLocalStorage()) {
        console.log("Task list is Empty...");
        return;
      }
      displayElements();
      whilecnt = 0;
      while (whilecnt < 10 && saveToLocalStorage()) {
        whilecnt++;
      }
    } catch (e) {
      console.error(e);
      console.log("Could not list items");
    }
  } else {
    console.log("Invalid command!");
  }
}

function loadLocalStorage() {}
function addElement(argument) {}
function saveToLocalStorage() {}
function removeElement(argument) {}
function displayElements(argument) {}
