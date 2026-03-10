const input = document.getElementById("input");
const types = document.getElementById("types");
const status = document.getElementById("status");
const output = document.getElementById("output");
const filter=document.getElementById("filter");

function add() {
  if(input.value.trim()===""){
    alert("enter the task first");
    return ;
  }
   const li = document.createElement("li");
    const completion= status.value==="yes"?"Complete":"Incomplete";
    li.textContent = input.value+"-"+types.value+"-"+completion;
    if(completion==="Complete"){
        li.classList.add("complete");
    }
    output.append(li);
    input.value="";

}
output.addEventListener("click",function(event){
     const li=event.target;
     if(li.textContent.includes("Incomplete")){
        li.textContent =li.textContent.replace("Incomplete","Complete");
        li.classList.add("complete");
     }
     else{
        li.textContent =li.textContent.replace("Complete","Incomplete");
        li.classList.remove("complete");   
        }
});

filter.addEventListener("change", ()=>{
  let val=filter.value;
  let tasks=output.querySelectorAll("li");
  tasks.forEach((task)=>{
    if(val==="completed"){
      if(task.classList.contains("complete")){
        task.style.display="block";
      }
      else{
        task.style.display="none";
      }
    }

    else if(val==="Incomplete"){
      if(!task.classList.contains("complete")){
            task.style.display = "block";
        }else{
            task.style.display = "none";
        }
    }

    else{
      task.style.display="block";
    }
  });

}
)