let tasks =[];

const renderTasks =() =>{
    const taskList = document.getElementById('tasklist');
    taskList.innerHTML=''

    tasks.forEach((task,index)=>{
        const li = document.createElement('li');
        li.textContent=task.name;
        const btn = document.createElement('button');
        btn.innerHTML='<div>delete</div>';
        btn.className='delete-button';
        btn.onclick=()=>deleteTask(index); 

        li.appendChild(btn);
        taskList.appendChild(li);
        
    });
}

const addtask = () => {
    const name = document.getElementById('taskInput');
    if(name.value!== ''){
        const task ={
            name:name.value,
            date:new Date()
        }
        tasks.push(task);
        renderTasks();
    }
}

const deleteTask = (index)=>{
    tasks.splice(index,1);
    renderTasks();
}

const clearAllTasks =()=>{
    tasks= [];
    renderTasks();
}

const countTasks =()=>{
    alert("total number of task is;" + tasks.length)
}
