var x = 0;
function txt()
{
    if(x==0){
        document.getElementById('tt').style='display:none';
        x=1;
    }    
    else{
        document.getElementById('tt').style='display:block';
        x=0;
    }
}

//Here i take the ID which i given to the div. I declare a function as txt because its for the text which i want to show. 
//I use css to display nothing when the page reload. With my function, when there's nothing before the click , after the click it'll display the text.

function one(){
    var v = prompt("Donner la nombre");
    if(v%2==0)
    alert("EVEN");
    else
    alert("ODD");
}



var x = 0;
function two()
{
    if(x==0){
        document.getElementById('2').style='display:none';
        x=1;
    }    
    else{
        document.getElementById('2').style='display:block';
        x=0;
    }
}

var x = 0;
function sol()
{
    if(x==0){
        document.getElementById('').style='display:none';
        x=1;
    }    
    else{
        document.getElementById('').style='display:block';
        x=0;
    }
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const task = taskInput.value;

    if (task.trim() === "") return;

    const listItem = document.createElement("li");
    listItem.innerHTML = `${task} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(listItem);

    taskInput.value = "";
  }

  function deleteTask(button) {
    button.parentElement.remove();
  }