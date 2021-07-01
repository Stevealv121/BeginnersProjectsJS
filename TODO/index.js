var toDoList = [];
var i = 1;
var list = document.createElement("ol");
list.id = "list";
document.body.appendChild(list);



function submit(){

    let input = document.getElementById("additem").value;
    toDoList[i] = input;
    createElement();
    i++;
    console.log(toDoList);
    
}

function clearList(){

    toDoList = [];
    
    let getList = document.getElementById("list");
    getList.parentNode.removeChild(getList);
    
    console.log(toDoList);
    i = 1;
    var list = document.createElement("ol");
    list.id = "list";
    document.body.appendChild(list);
    
    
}

function done(id,input){

    let first = document.getElementById(id);
    
    const index = toDoList.indexOf(input);

    if (index > -1) {
        toDoList.splice(index, 1);
    }
    first.parentNode.removeChild(first);
    createElement();
    console.log("done");
}

function createElement(){

    var li = "";
    toDoList.forEach((element,index) => {
        li += `<li id=${index}>${element}<button id=${index} onclick=done('${index}','${element}')>Done</button></li>`;
    });
    
    list.innerHTML = li;

    
    
}


