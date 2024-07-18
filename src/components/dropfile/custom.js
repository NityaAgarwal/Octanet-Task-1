
// Function to handle file input click on browseBtn click
// export function setupFileInput() {
//     const browseBtn = document.querySelector(".browseBtn");
//     const fileinput = document.querySelector("#fileinput");
  
//     browseBtn.addEventListener("click", () => {
//       fileinput.click();
//     });
//   }
  
  // Exporting other functions or variables if needed


// const dropZone = document.querySelector(".overlay");
// dropZone.addEventListener("dragover", (e) => {
//   dropZone.classList.add("dragged");
// });

export function dragOver(e, element) {
  e.preventDefault();
  if (!element.classList.contains("dragged"))
    element.classList.add("dragged");
}

export function dragLeave(element) {
  element.classList.remove("dragged");
}

export function dropItem(e, element) {
  e.preventDefault();
  element.classList.remove("dragged");
}