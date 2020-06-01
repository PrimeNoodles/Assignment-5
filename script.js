let numColumns = 3;
let numRows = 1;

function addRow() {
    let table = document.getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");
    for (let i = 0; i < numColumns; i++) {
        let column = document.createElement("td");
        row.appendChild(column);
    }
    table.appendChild(row);
}