var toDoList = {};
var i = 1;
//document.addEventListener('DOMContentLoaded', createButton(),false);


function submit(){

    let input = document.getElementById("additem").value;
    toDoList[i] = input;
    createElement(input);
    i++;
    console.log(toDoList);
    

}

function clearList(){

    toDoList = {};
    
    for(let j = 1;j<=i-1;j++){
        let getDiv = document.getElementById("div");
        getDiv.parentNode.removeChild(getDiv);
    }
    
    console.log(toDoList);
    i = 1;
    
    
}

function done(){
    let getDiv = document.getElementById("div");
    let done = document.createElement("p");
    done.innerHTML = "Done";
    getDiv.appendChild(done);
    console.log("done");
}

function createElement(input){

    let divElement = document.createElement("div");
    let p = document.createElement("p");
    //let xbtn = document.createElement("button");
    let donebtn = document.createElement("button");
    let string =  i.toString() + ". " + input;
    divElement.id = "div";
    p.innerHTML = string;
    p.id = "p";
    //xbtn.innerHTML = "x";
    //xbtn.id = "xbtn";
    donebtn.innerHTML = "Done";
    donebtn.id = "donebtn";
    
    divElement.appendChild(p);
    //divElement.appendChild(xbtn);
    divElement.appendChild(donebtn);
    document.body.appendChild(divElement);

    //xbtn.onclick = done();
    //donebtn.onclick = done;
    
    
}

function createButton(){
    var xbtn = document.createElement("button");
    xbtn.innerHTML = "x";
    xbtn.id = "xbtn";
    //xbtn.onclick = done();

}

