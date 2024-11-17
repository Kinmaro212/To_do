const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click',addTask);

const taskCard = document.querySelector('.todoCard');
const taskContainer = document.querySelector('#todoCards');
const delBtn = document.querySelector('.delBtn');
const label = document.querySelector('.counter');
let count = 1;

delBtn.addEventListener('click',function(){
    deleteTask(taskCard);
})

function deleteTask(task){
    task.remove();
    count--;
    updateCount();
}

function updateCount(){
    label.textContent=count;
    console.log(count);
}

function addTask(){
    const newTask = taskCard.cloneNode(true);
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('TextArea')
    count++
    newTextArea.value = "New Task"
    newDelBtn.addEventListener('click',function(){
        deleteTask(newTask);
    });

    taskContainer.appendChild(newTask)
    updateCount();
}