const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector(".todoCard");

/*======================= faire fonctionner boutton de suppression========================*/

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click',function(){//delete default task on click
    deleteTask(taskCard);//target the right task
});

//On crée la fonction de suppression
function deleteTask(task){
    task.remove();// remove the task
}


//on crée la fonction d'ajout
addBtn.addEventListener('click', addTask);//add a task on click






function addTask(){
    const newTask = taskCard.CloneNode(true)//clone the task card
    const newDelBtn = newTask.querySelector('delBtn')
    const newTextArea = newTask.querySelector('TextArea')


    newTextArea.value = "New Task" //set new task text to "New task"
    newDelBtn.addEventListener('click', function(){ //add delete event listener to new task
        deleteTask(newTask);//Target the new Task
     });
 
tasksConatainer.appendChild(newTask)// append new task to the tasks container
uptadeCount();

}

/* on clone l’élément NewTask (à savoir la card créée en HTML) 
Puis on définit la valeur de la zone de texte afin qu’elle ne soit pas vide 
Enfin on ajoute cette nouvelle carte dans le DOM (afin de l’afficher. Faites le test 
d’enlever cette ligne et d’en constater le changement)*/

