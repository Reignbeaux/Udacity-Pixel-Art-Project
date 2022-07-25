// Select color input
//This code is in the canvas event function.

const canvas = document.getElementById('pixelCanvas');
// Select size input
const size = document.getElementById('sizePicker');


// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    event.preventDefault();
    const gridHeight = document.getElementById('inputHeight').value;
    const gridWidth = document.getElementById('inputWidth').value;
    for (let rows = 0; rows < gridHeight; rows++) {
        let tr = document.createElement("tr");
        for (let cols = 0; cols < gridWidth; cols++) {
            let td = document.createElement("td");
            tr.insertAdjacentElement("afterbegin", td);
        }
        canvas.insertAdjacentElement("afterbegin", tr);
    }
}
//This code is what clears the canvas.
size.addEventListener("submit", function(event) {
    event.preventDefault();
    canvas.innerHTML = "";
});
//and this code calls the makeGrid() function.
size.addEventListener("submit", makeGrid);
//This code allows the chosen color(s) to fill the cells in the canvas.
canvas.addEventListener("mousedown", function (event) {
    const colors = document.getElementById('colorPicker');
    if (event.target.tagName === "TD") {
        var colorValue = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor = colorValue;
    }
});