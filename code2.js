
// right side
let p_date=document.getElementById("p-date");


//right side div
let My_Day_right=document.getElementById("My-Day-right");
let Important_right=document.getElementById("Important-right");
let Planned_right=document.getElementById("Planned-right");
let Assigned_right=document.getElementById("Assigned-right");
let Tasks_right=document.getElementById("Tasks-right");



//My Day
let MyDay=document.getElementById("My-Day");
MyDay.addEventListener("click",function(){
    My_Day_right.style.display="block";
    Planned_right.style.display="none";
    Assigned_right.style.display="none";
    Tasks_right.style.display="none";
    Important_right.style.display="none";
    p_date.innerHTML=new Date()
});

// Important 
let Important=document.getElementById("Important");
Important.addEventListener("click",function(){
    My_Day_right.style.display="none";
    Planned_right.style.display="none";
    Assigned_right.style.display="none";
    Tasks_right.style.display="none";
    Important_right.style.display="block";
});


//planned
let Planned=document.getElementById("Planned");

Planned.addEventListener("click",function(){
    
    My_Day_right.style.display="none";
    Important_right.style.display="none";
    Assigned_right.style.display="none";
    Tasks_right.style.display="none";
    Planned_right.style.display="block";

});


//Assigned-to-me
let Assigned_to_me=document.getElementById("Assigned-to-me");
Assigned_to_me.addEventListener("click",function(){

    My_Day_right.style.display="none";
    Planned_right.style.display="none";
    Important_right.style.display="none";
    Tasks_right.style.display="none";
    Assigned_right.style.display="block";

});


//Home
let Tasks=document.getElementById("Tasks");
Tasks.addEventListener("click",function(){

    My_Day_right.style.display="none";
    Planned_right.style.display="none";
    Important_right.style.display="none";
    Assigned_right.style.display="none";
    Tasks_right.style.display="block";

});


//Add task
let add =document.getElementById("add");
let task_value=document.getElementById("task-value");
let content=document.getElementById("content");





add.style.display="none";


let My_Day_content=document.getElementById("My-Day-content");
let Important_content=document.getElementById("Important-content");
let Planned_content=document.getElementById("Planned-content");
let Assigned_content=document.getElementById("Assigned-content");
let Tasks_content=document.getElementById("Tasks-content");

// Initialization the storge
let My_day_storagearray=JSON.parse(localStorage.getItem("My_Day_notes")) || [];
let Important_storagearray=JSON.parse(localStorage.getItem("Important_notes")) || [];
let Planned_storagearray=JSON.parse(localStorage.getItem("Planned_notes")) || [];
let Assigned_storagearray=JSON.parse(localStorage.getItem("Assigned_notes")) || [];
let Tasks_storagearray=JSON.parse(localStorage.getItem("Tasks_notes")) || [];




add.onclick = function() {
     
      Add_task();
}

task_value.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        add.click();
    }
})


// left side counter
let My_Day_count_ele=document.getElementById("My-Day-count");
let Important_count_ele=document.getElementById("Important-count");
let Planned_count_ele=document.getElementById("Planned-count");
let Assigned_count_ele=document.getElementById("Assigned-count");
let Tasks_count_ele=document.getElementById("Tasks-count");

let My_day_count=0;
let Important_count=0;
let Planned_count=0;
let Assigned_count=0;
let Tasks_count=0;

function Add_task(){

    
   let div = document.createElement("div");
   div.style.width = "85%";  
   div.style.minHeight = "30px";  
   div.style.margin = "2px 0";
   div.style.borderRadius = "2px";
   div.style.backgroundColor = "White";
   div.style.padding = "15px";  
   div.style.wordBreak = "break-word";  
   div.style.overflowWrap = "break-word"; 

    div.innerHTML=task_value.value;
    

    if(task_value.value!==""){
        if(My_Day_right.style.display==="block"){

          My_Day_content.appendChild(div);
          My_day_storagearray.push(task_value.value);
          localStorage.setItem("My_Day_notes",JSON.stringify(My_day_storagearray));

          My_day_count++;
          Tasks_count++;
          Tasks_count_ele.innerHTML=Tasks_count;
         My_Day_count_ele.innerHTML=My_day_count;
  
        } else if(Important_right.style.display==="block"){
          
          Important_content.appendChild(div);
          Important_storagearray.push(task_value.value);
          localStorage.setItem("Important_notes",JSON.stringify(Important_storagearray));


          Important_count++;
          Tasks_count++;
          Tasks_count_ele.innerHTML=Tasks_count;
          Important_count_ele.innerHTML=Important_count;
  
        } else if(Planned_right.style.display==="block"){
          
          Planned_content.appendChild(div);
          Planned_storagearray.push(task_value.value);
          localStorage.setItem("Planned_notes",JSON.stringify(Planned_storagearray));

          Planned_count++;
          Tasks_count++;
          Tasks_count_ele.innerHTML=Tasks_count;
          Planned_count_ele.innerHTML=Planned_count;
  
        } else if(Assigned_right.style.display==="block"){
      
          Assigned_content.appendChild(div);
          Assigned_storagearray.push(task_value.value);
          localStorage.setItem("Assigned_notes",JSON.stringify(Assigned_storagearray));


          Assigned_count++;
          Tasks_count++;
          Tasks_count_ele.innerHTML=Tasks_count;
          Assigned_count_ele.innerHTML=Assigned_count;
  
        } else {
          
          Tasks_content.appendChild(div);
          Tasks_storagearray.push(task_value.value);
          localStorage.setItem("Tasks_notes",JSON.stringify(Tasks_storagearray));

          Tasks_count++;
          Tasks_count++;
          Tasks_count_ele.innerHTML=Tasks_count;
        }

        // Create another div that have same Characteristics every time click at any section (My-Day,Important,etc..)
        let tasksDiv = document.createElement("div");
        tasksDiv.style.width = "85%"; 
        tasksDiv.style.minHeight = "30px";  
        tasksDiv.style.margin = "2px 0";
        tasksDiv.style.borderRadius = "2px";
        tasksDiv.style.backgroundColor = "white";
        tasksDiv.style.padding = "15px";  
        tasksDiv.style.wordBreak = "break-word";  
        tasksDiv.style.overflowWrap = "break-word";
        tasksDiv.innerHTML = task_value.value;


        Tasks_content.appendChild(tasksDiv);
        Tasks_storagearray.push(task_value.value);
        localStorage.setItem("Tasks_notes",JSON.stringify(Tasks_storagearray));
}
}



function loadTasks() {
    
  
    // Append tasks to content divs
    My_day_storagearray.forEach(task => {
      let div = document.createElement("div");
      div.style.width = "85%";  
      div.style.minHeight = "30px";  
      div.style.margin = "2px 0";
      div.style.borderRadius = "2px";
      div.style.backgroundColor = "white";
      div.style.padding = "15px";  
      div.style.wordBreak = "break-word";  
      div.style.overflowWrap = "break-word";
      div.innerHTML = task;
      My_Day_content.appendChild(div);
    });
  
    Important_storagearray.forEach(task => {
      let div = document.createElement("div");
      div.style.width = "85%";  
      div.style.minHeight = "30px";  
      div.style.margin = "2px 0";
      div.style.borderRadius = "2px";
      div.style.backgroundColor = "white";
      div.style.padding = "15px";  
      div.style.wordBreak = "break-word";  
      div.style.overflowWrap = "break-word";
      div.innerHTML = task;
      Important_content.appendChild(div);
    });
  
    Planned_storagearray.forEach(task => {
      let div = document.createElement("div");
      div.style.width = "85%";  
      div.style.minHeight = "30px";  
      div.style.margin = "2px 0";
      div.style.borderRadius = "2px";
      div.style.backgroundColor = "white";
      div.style.padding = "15px";  
      div.style.wordBreak = "break-word";  
      div.style.overflowWrap = "break-word";
      div.innerHTML = task;
      Planned_content.appendChild(div);
    });
  
    Assigned_storagearray.forEach(task => {
      let div = document.createElement("div");
      div.style.width = "85%";  
      div.style.minHeight = "30px";  
      div.style.margin = "2px 0";
      div.style.borderRadius = "2px";
      div.style.backgroundColor = "white";
      div.style.padding = "15px";  
      div.style.wordBreak = "break-word";  
      div.style.overflowWrap = "break-word";
      div.innerHTML = task;
      Assigned_content.appendChild(div);
    });
  
    Tasks_storagearray.forEach(task => {
      let div = document.createElement("div");
      div.style.width = "85%";  
      div.style.minHeight = "30px";  
      div.style.margin = "2px 0";
      div.style.borderRadius = "2px";
      div.style.backgroundColor = "white";
      div.style.padding = "15px";  
      div.style.wordBreak = "break-word";  
      div.style.overflowWrap = "break-word";
      div.innerHTML = task;
      Tasks_content.appendChild(div);
    });

      // Update task counts
   My_day_count = My_day_storagearray.length;
   Important_count = Important_storagearray.length;
   Planned_count = Planned_storagearray.length;
   Assigned_count = Assigned_storagearray.length;
  Tasks_count = Tasks_storagearray.length;
  
    My_Day_count_ele.innerHTML = My_day_count;
    Important_count_ele.innerHTML = Important_count;
    Planned_count_ele.innerHTML = Planned_count;
    Assigned_count_ele.innerHTML = Assigned_count;
    Tasks_count_ele.innerHTML = Tasks_count;
  }
  

  window.onload = function() {
    My_Day_right.style.display = "block";
    p_date.innerHTML=new Date()
  }

    // Call loadTasks function when page loads
  loadTasks();



let left_side=document.querySelector(".left-side-bar")
let sidebar=document.getElementById("sidebar");
let right_side=document.querySelector(".right-side");


sidebar.addEventListener("click",function(){
  left_side.style.display="block";
})


let clicked = false;

sidebar.addEventListener("click",()=>{
  if (clicked) {
    left_side.style.display="none";
    sidebar.style.translate="0";
  } else {
    left_side.style.display="block";
    left_side.style.width="230px";
    left_side.style.zIndex="2";
    right_side.style.zIndex="1";
    sidebar.style.translate="247px";
    
  }
  clicked = !clicked;

})


