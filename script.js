function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
let numColumns = 3;
let numRows = 1;
let table = document.getElementsByTagName("tbody")[0];

// add rows to the grid
function addRow() {
    let row = document.createElement("tr");
    for (let i = 0; i < numColumns; i++) {
        let column = document.createElement("td");
        row.appendChild(column);
    }
    table.appendChild(row);
}

// remove rows from the grid
function removeRow() {
    let row = table.lastChild;
    table.removeChild(row);
}
