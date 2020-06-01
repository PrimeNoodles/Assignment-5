let numColumns = 3;
let numRows = 1;
let table = document.getElementsByTagName("tbody")[0];

function addRow() {
    let row = document.createElement("tr");
    for (let i = 0; i < numColumns; i++) {
        let column = document.createElement("td");
        row.appendChild(column);
    }
    table.appendChild(row);
}

function removeRow() {
    let row = table.lastChild;
    table.removeChild(row);
}