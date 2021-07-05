
var table = document.getElementById("table");
var index = 1;
var expensesData = [];
var row = "";
table.innerHTML = `<tr>
    <th>Name</th>
    <th>Date</th>
    <th>Amount</th>
    </tr>`;

function addExpense(){
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;

    expensesData[index] = name;
    expensesData[index+1] = date;
    expensesData[index+2] = amount;
    index += 3;
    showTable();

}

function deleteEx(id){

    const i = id*3;

    if (i > -1) {
        expensesData.splice(i-2, 1);
        expensesData.splice(i-2, 1);
        expensesData.splice(i-2, 1);
    }
    table.deleteRow(id);
    index -= 3;
    showTable();

}

function showTable(){
    row = "";
    table.innerHTML = "";
    table.innerHTML = `<tr>
    <th>Name</th>
    <th>Date</th>
    <th>Amount</th>
    </tr>`;
    console.log(expensesData);
    let k = 1;
    for(let j = 1; j <= index-1; j++){
        if(j%3==0){
            row += `<tr id=${k}><td>${expensesData[j-2]}</td><td>${expensesData[j-1]}</td>
                    <td>${expensesData[j]}<button id=${k}
                    onclick="deleteEx(this.id)">X</button></td></tr>`;
            k++;
        }
    }

    table.innerHTML += row;
    console.log("row: "+row);
}