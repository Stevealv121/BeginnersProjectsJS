var toDoList = {};
var i = 1;
var list = document.createElement("ol");
list.id = "list";
document.body.appendChild(list);



function submit(){

    let input = document.getElementById("additem").value;
    toDoList[i] = input;
    createElement(input);
    i++;
    console.log(toDoList);
    

}

function clearList(){

    toDoList = {};
    
    let getList = document.getElementById("list");
    getList.parentNode.removeChild(getList);
    
    console.log(toDoList);
    i = 1;
    var list = document.createElement("ol");
    list.id = "list";
    document.body.appendChild(list);
    
    
}

function done(id){

    id = "1";
    let first = document.getElementById(id);
    first.parentNode.removeChild(first);
    console.log("done");
}

function createElement(input){

    let li = document.createElement("li");
    let donebtn = document.createElement("button");
    let string =  input + ".        ";

    li.innerHTML = string;
    li.id = i.toString();

    donebtn.innerHTML = "Done";
    donebtn.id = i.toString();
    

    li.appendChild(donebtn);
    list.appendChild(li);
    donebtn.onclick = done;
    
    
}


