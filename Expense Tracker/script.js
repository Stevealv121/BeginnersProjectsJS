
var table = document.getElementById("table");
var index = 1;
var expensesData = [];
var row = "";

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
    console.log("i: "+i);

    if (i > -1) {
        expensesData.splice(i-2, 1);
        expensesData.splice(i-2, 1);
        expensesData.splice(i-2, 1);
    }
    table.deleteRow(id);
    showTable();

}

function showTable(){
    row = "";
    console.log("row: "+row);
    console.log(expensesData);
    let k = 1;
    for(let j = 1; j <= index-1; j++){
        if(j%3==0){
            row += `<tr id=${k}><td>${expensesData[j-2]}</td><td>${expensesData[j-1]}</td>
                    <td>${expensesData[j]}<button id=${k}
                    onclick="deleteEx(this.id)">X</button></td></tr>`;
            k++;
            console.log("amount: "+expensesData[j]);
        }
    }

    table.innerHTML += row;
    console.log("row: "+row);
}