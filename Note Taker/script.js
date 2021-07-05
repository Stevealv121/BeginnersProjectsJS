var noteTable = document.getElementById("table");
var notes = [];
var i = 1;
var n_rows = 0;
var n_columns = 0;
var FirstRow = noteTable.insertRow(n_rows);

function addNote(){

    var input = document.getElementById("writeNote").value;
    console.log("module: "+i%3);
    if(i%3 == 0){
        n_rows++;
        var newRow = noteTable.insertRow(n_rows);
        insertColumn(input,newRow);

    }else{
        if (n_rows == 0){
            insertColumn(input,FirstRow);
        }else{
            let row = noteTable.insertRow(n_rows);
            insertColumn(input,row);
        }
        
    }

    i++;
    
}

function createNote(input){

    let note = "";
    note = `<div><p style="color:black">Note ${i}</p>
            <p>${input}</p>
            <button id=${i} class="detail" onclick="viewDetail()">
            View detail</button>
            </div>`;

    return note;
}

function insertColumn(input,row){
    if (n_columns == 2){
        n_columns = 0;
    }
    let td = row.insertCell(n_columns);
    td.innerHTML = createNote(input);
    n_columns++;
}