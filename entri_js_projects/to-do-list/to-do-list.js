
var taskEntry=document.getElementById("input")
var addBtn=document.getElementById("btn")
var tasksHolder=document.getElementById("tasks")

addBtn.addEventListener('click',()=>{
    var task=taskEntry.value
    addTask(task)
    taskEntry.value=" "
})

const addTask=(task)=>{
    var li=document.createElement("li")
    li.innerHTML=task
    tasksHolder.appendChild(li)
}