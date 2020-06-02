let numColumns = 1;
let numRows = 1;
let mainGrid = document.getElementById("main-grid");
let currentColor = document.getElementById("color-select").value;
let coloring = false;

function setCurrentColor(color) {
    currentColor = color;
}

setCellProperties(document.getElementById("pre-row"));

function setCellProperties(cell) {

    cell.classList.add("uncolored");

    // FEATURES #5 AND #6
    cell.addEventListener("click", () => { changeColor(cell); });

    // FEATURE #10
    cell.addEventListener("mousedown", e => { coloring = true; });
    cell.addEventListener("mousemove", () => {
        if (coloring) {
            changeColor(cell);
        }
    });
    cell.addEventListener("mouseup", () => {
        if (coloring) {
            coloring = false;
        }
    });

}

// FEATURE #1
function addRow() {
    let row = document.createElement("tr");
    for (let i = 0; i < numColumns; i++) {
        let column = document.createElement("td");
        setCellProperties(column);
        row.appendChild(column);
    }
    mainGrid.appendChild(row);
}

// FEATURE #2
function removeRow() {
    let row = mainGrid.lastChild;
    mainGrid.removeChild(row);
    numRows--;
}

// FEATURE #3
function addColumn() {
    let rows = document.getElementsByTagName("tr");
    let rowArr = [...rows];
    console.log(rowArr);
    rowArr.forEach(row => {
        let column = document.createElement("td");
        setCellProperties(column);
        row.appendChild(column);
    });
    numColumns++;
}

// FEATURE #4
function removeColumn() {
    let rows = document.getElementsByTagName("tr");
    let rowArr = [...rows];
    rowArr.forEach(row => {
        let column = row.lastChild;
        row.removeChild(column);
    });
    numColumns--;
}

// FEATURE #7
function setUncolored() {
    let cells = document.getElementsByTagName("td");
    let cellsArr = [...cells];
    let uncolored = cellsArr.filter(cell => {
        return cell.classList.contains("uncolored");
    });
    uncolored.forEach(cell => { changeColor(cell); })
}

// FEATURE #8
function setAllCurrent() {
    let cells = document.getElementsByTagName("td");
    let cellsArr = [...cells];
    cellsArr.forEach(cell => { changeColor(cell); })
}

// FEATURE #9
function clearAll() {
    let cells = document.getElementsByTagName("td");
    let cellsArr = [...cells];
    cellsArr.forEach(cell => {
        cell.classList.add("uncolored");
    })
}

function changeColor(cell) {
    cell.style.backgroundColor = currentColor;
    cell.classList.remove("uncolored");
}