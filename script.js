const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// listen for drag event on fill, then call corresponding function
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// for of loop to iterate through empties 
for (const empty of empties) {
    // listen for drag event to call corresponding function
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

// adds hold class to fill, then clears fill
function dragStart() {
    this.className += " hold";
    setTimeout(() => this.className = "", 0);
}
// adds fill class
function dragEnd() {
    this.className = "fill";
}
// prevent default: default is to set drag operation to "none"
function dragOver(e) {
    e.preventDefault();
}
// prevent default: default is to reject user selection as potential target
// and add hovered class
function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
}
// set class back to empty
function dragLeave() {
    this.className = "empty";
}
// make sure div has empty class, then add fill element
function dragDrop() {
    this.className = "empty";
    this.append(fill);
}