// alert("connected");
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("myParagraph").innerText = "Text has been changed!";
  });
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeTypeObj = document.getElementById("coffeeType");
  coffeeTypeObj.textContent = "Espresso";
  coffeeTypeObj.classList.add("highlight");
  coffeeTypeObj.style.color = "#fff";
  coffeeTypeObj.style.backgroundColor = "rgba(100, 100, 100, 0.5)";
});

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  let shoppingList = document.getElementById("shoppingList");
  shoppingList.appendChild(newItem);
  // newItem.classList.add("highlight");
});

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    //   let newItem = document.createElement("li");
    //   newItem.textContent = "Eggs";
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove(); // Removes the last task from the list
    // newItem.classList.add("highlight");
  });

// document
//   .getElementsByClassName("teaItem")
//   .addEventListener("click", function () {
//     document.getElementByClassName("highlight").classList.remove("highlight");
//     // Removes the last task from the list
//     if (event.target && event.target.matches("teaItem")) {
//       event.target.classList.add("highlight");
//     } // Highlights the clicked tea item
//     // Removes the last task from the list
//   });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent =
    "DOM is fully loaded and ready to be manipulated!";
});

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    document.getElementById("descriptionText").classList.toggle("hidden");
  });
